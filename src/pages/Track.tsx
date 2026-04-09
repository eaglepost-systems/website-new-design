import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Package, MapPin, CheckCircle2, Clock, Truck,
  AlertCircle, Loader2, ChevronUp, ChevronDown,
  ArrowRight, Box, CircleDot, X, Plane, Scale, Boxes
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const TRACKING_API = "https://api.eaglepost.com/functions/v1/shipment_tracking";

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" }) +
      ", " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false });
  } catch { return iso; }
};

const statusIcon = (status: string) => {
  if (status?.toLowerCase().includes("cancel")) return AlertCircle;
  switch (status) {
    case "Delivered": return CheckCircle2;
    case "OutForDelivery": return Truck;
    case "OnTheWay": return Truck;
    case "PickedUp": return Package;
    case "AtSortingHub": return Box;
    case "ReadyForDelivery": return MapPin;
    default: return CircleDot;
  }
};

const Track = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [trackingId, setTrackingId] = useState(searchParams.get("id") || "");
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [historyOpen, setHistoryOpen] = useState(true);

  const handleTrack = async () => {
    const code = trackingId.trim();
    if (!code) return;
    setSearched(true);
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`${TRACKING_API}?code=${encodeURIComponent(code)}`);
      const json = await res.json();
      if (!json.success) {
        setError(json.message || "Not found");
        return;
      }
      setResult(json.data);
    } catch (err: any) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("id")) {
      handleTrack();
    }
  }, []);

  const data = result;
  const currentStatus = data?.currentStatusTimeline?.label || data?.currentStatusTimeline?.status;
  const isCanceledOrder = data?.currentStatusTimeline?.isCanceled
    || currentStatus?.toLowerCase().includes("cancel")
    || data?.statusTimeline?.some((s: any) => s.isCanceled || s.label?.toLowerCase().includes("cancel") || s.status?.toLowerCase().includes("cancel"))
    || data?.shipmentHistory?.some((h: any) => h.isCanceled || h.status?.toLowerCase().includes("cancel"));

  return (
    <>
      {/* Hero */}
      <PageHero image={heroImages.track}>
            <Badge className="bg-secondary text-secondary-foreground mb-4">{t("track.badge")}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4">{t("track.title")}</h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">{t("track.intro")}</p>
        </PageHero>

      {/* Search + Results */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative -mt-20 mb-10"
          >
            <div className="bg-background rounded-2xl shadow-xl border border-border p-2 flex gap-2">
              <div className="relative flex-1 min-w-0">
                <Search className="absolute start-3 sm:start-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder={t("track.placeholder")}
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="h-12 sm:h-14 ps-10 sm:ps-12 pe-2 sm:pe-4 border-0 bg-transparent text-sm sm:text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button
                onClick={handleTrack}
                disabled={loading}
                size="lg"
                className="h-12 sm:h-14 px-4 sm:px-8 rounded-xl bg-primary text-primary-foreground font-bold text-sm sm:text-base shrink-0"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span className="hidden sm:inline">{t("track.trackBtn")}</span><span className="sm:hidden">{t("track.trackBtn")}</span> <ArrowRight className="w-4 h-4 ms-1 sm:ms-2" /></>}
              </Button>
            </div>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <div className="relative">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <div className="absolute inset-0 w-10 h-10 rounded-full border-2 border-primary/20" />
              </div>
              <p className="text-sm text-muted-foreground">Looking up your shipment…</p>
            </div>
          )}

          {/* Not found */}
          <AnimatePresence>
            {searched && !loading && !result && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                <Card className="border-destructive/20 bg-destructive/5 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{t("track.notFoundTitle")}</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">{error || t("track.notFoundDesc")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          {data && !loading && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">

              {/* Summary Card */}
              <Card className="border-border rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Header strip */}
                  <div className="bg-primary/[0.03] border-b border-border px-4 sm:px-6 py-4 sm:py-5">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        <div>
                          <p className="text-[10px] text-primary font-bold uppercase tracking-[0.15em] mb-1">Order Tracking Number</p>
                          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">{data.trackingNumber}</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          {data.service && (
                            <div className="flex items-center gap-2 bg-background border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                              <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-primary shrink-0" />
                              <div>
                                <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Service</p>
                                <p className="font-bold text-[11px] sm:text-xs">{data.service}</p>
                              </div>
                            </div>
                          )}
                          {currentStatus && (
                            <Badge className={`text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold ${
                              isCanceledOrder
                                ? "bg-destructive text-destructive-foreground"
                                : currentStatus === "Delivered"
                                  ? "bg-secondary text-secondary-foreground"
                                  : "bg-primary text-primary-foreground"
                            }`}>
                              {currentStatus}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Origin → Destination */}
                  <div className="px-4 sm:px-6 py-4 sm:py-6">
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Origin</p>
                          <p className="font-bold text-xs sm:text-sm truncate">{data.origin?.country}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">{data.origin?.city}</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center pt-4 sm:pt-5 min-w-[40px]">
                        <div className={`flex-1 h-px relative mx-1 sm:mx-2 ${isCanceledOrder || currentStatus === "Delivered" ? "" : "overflow-hidden"}`}>
                          <div className={`absolute inset-0 border-t-2 border-dashed ${
                            isCanceledOrder ? "border-destructive/25" : currentStatus === "Delivered" ? "border-green-500/25" : "border-primary/25"
                          }`} />
                          {isCanceledOrder ? (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-1 sm:px-2 z-10">
                              <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                            </div>
                          ) : currentStatus === "Delivered" ? (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-1 sm:px-2 z-10">
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            </div>
                          ) : (
                            <>
                              <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-md shadow-primary/40"
                                animate={{ left: ["-5%", "105%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                              />
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-1 sm:px-2 z-10">
                                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                </motion.div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                        <div className="text-end min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Destination</p>
                          <p className="font-bold text-xs sm:text-sm truncate">{data.destination?.country}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">{data.destination?.city}</p>
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Timeline */}
                  {data.statusTimeline && data.statusTimeline.length > 0 && (
                    <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                      <div className="bg-muted/40 rounded-xl p-3 sm:p-5">
                        <div className="flex items-center justify-between gap-0">
                          {data.statusTimeline.map((step: any, i: number) => {
                            const stepCanceled = step.isCanceled || step.label?.toLowerCase().includes("cancel") || step.status?.toLowerCase().includes("cancel");
                            return (
                              <div key={i} className="flex flex-col items-center flex-1 relative">
                                {i > 0 && (
                                  <div className={`absolute top-4 sm:top-5 end-1/2 w-full h-[2px] sm:h-[3px] -translate-y-1/2 rounded-full transition-colors ${
                                    step.isCompleted ? (stepCanceled ? "bg-destructive" : "bg-primary") : "bg-border"
                                  }`} />
                                )}
                                <div className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                                  stepCanceled && step.isCompleted
                                    ? "bg-destructive text-destructive-foreground shadow-md shadow-destructive/25"
                                    : step.isCompleted
                                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                      : "bg-background border-2 border-border text-muted-foreground"
                                }`}>
                                  {step.isCurrent && !stepCanceled && (
                                    <>
                                      <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                                      <span className="absolute inset-[-4px] sm:inset-[-5px] rounded-full border-2 border-secondary/40 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                                    </>
                                  )}
                                  {stepCanceled && step.isCurrent && (
                                    <>
                                      <span className="absolute inset-0 rounded-full bg-destructive/30 animate-ping" />
                                      <span className="absolute inset-[-4px] sm:inset-[-5px] rounded-full border-2 border-destructive/40 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                                    </>
                                  )}
                                  {stepCanceled ? <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" /> : <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />}
                                </div>
                                <p className={`text-[9px] sm:text-[11px] mt-1.5 sm:mt-2.5 text-center font-medium leading-tight ${
                                  stepCanceled ? "text-destructive font-semibold" : step.isCompleted ? "text-foreground font-semibold" : "text-muted-foreground"
                                }`}>
                                  {step.label}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Shipment Details Card */}
              {(data.service || data.noOfPieces != null || data.weightInKg != null || data.numberOfItems != null || data.weight != null) && (
                <Card className="border-border rounded-2xl overflow-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-3 divide-x divide-border">
                      <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 first:ps-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Service</p>
                          <p className="font-bold text-xs sm:text-sm truncate">{data.service || "—"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Number of Items</p>
                          <p className="font-bold text-xs sm:text-sm">{data.noOfPieces ?? data.numberOfItems ?? "—"}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 last:pe-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider">Weight</p>
                          <p className="font-bold text-xs sm:text-sm">{(data.weightInKg ?? data.weight) ? `${data.weightInKg ?? data.weight} KG` : "—"}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Shipment History */}
              {data.shipmentHistory && data.shipmentHistory.length > 0 && (
                <Card className="border-border rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 hover:bg-muted/30 transition-colors"
                    onClick={() => setHistoryOpen(!historyOpen)}
                  >
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="font-display font-bold text-base sm:text-lg">Shipment History</span>
                    <motion.div animate={{ rotate: historyOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {historyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Timeline view */}
                        <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                          <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute start-4 sm:start-5 top-0 bottom-0 w-px bg-border" />

                            {data.shipmentHistory.map((h: any, i: number) => {
                              const isCurrent = i === 0;
                              const isCanceled = h.isCanceled || h.status?.toLowerCase().includes("cancel");
                              const Icon = statusIcon(h.status);
                              return (
                                <motion.div
                                  key={h.id || i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.04, duration: 0.3 }}
                                  className="relative flex items-start gap-2.5 sm:gap-4 py-3 sm:py-4"
                                >
                                  {/* Icon node */}
                                  <div className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                    isCanceled
                                      ? "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/25"
                                      : isCurrent
                                        ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25"
                                        : "bg-primary/10 text-primary border border-primary/20"
                                  }`}>
                                    {isCurrent && !isCanceled && (
                                      <>
                                        <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" />
                                        <span className="absolute inset-[-3px] sm:inset-[-4px] rounded-full border-2 border-secondary/30 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                                      </>
                                    )}
                                    {isCanceled && (
                                      <>
                                        <span className="absolute inset-0 rounded-full bg-destructive/30 animate-ping" />
                                        <span className="absolute inset-[-3px] sm:inset-[-4px] rounded-full border-2 border-destructive/30 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                                      </>
                                    )}
                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
                                  </div>

                                  {/* Content */}
                                  <div className={`flex-1 min-w-0 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 ${
                                    isCanceled
                                      ? "bg-destructive/5 border border-destructive/20"
                                      : isCurrent
                                        ? "bg-secondary/5 border border-secondary/20"
                                        : "bg-muted/30"
                                  }`}>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-1">
                                      <div className="min-w-0">
                                        <p className={`font-bold text-xs sm:text-sm truncate ${
                                          isCanceled ? "text-destructive" : isCurrent ? "text-secondary" : "text-foreground"
                                        }`}>
                                          {h.description}
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{h.status}</p>
                                      </div>
                                      <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-muted-foreground shrink-0">
                                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                        {formatDate(h.createdAt)}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Track;
