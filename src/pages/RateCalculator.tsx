import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Globe, Truck, ArrowRightLeft, MapPin, Home, ArrowLeft, ArrowRight, Package, Send, Plus, Copy, Trash2, RefreshCw, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import MapPickerDialog from "@/components/MapPickerDialog";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

// ── Mock data (structured to be replaced by API later) ──

interface RateRow {
  weightRange: string;
  zone1: number;
  zone2: number;
  zone3: number;
  zone4: number;
}

interface LocalService {
  name: string;
  description: string;
  weightRanges: { range: string; price: number }[];
}

// International Outbound rates (IQD)
const intlOutboundRates: RateRow[] = [
  { weightRange: "0 – 0.5 kg", zone1: 15000, zone2: 22000, zone3: 30000, zone4: 40000 },
  { weightRange: "0.5 – 1 kg", zone1: 22000, zone2: 32000, zone3: 42000, zone4: 55000 },
  { weightRange: "1 – 2 kg", zone1: 30000, zone2: 45000, zone3: 58000, zone4: 75000 },
  { weightRange: "2 – 5 kg", zone1: 45000, zone2: 65000, zone3: 85000, zone4: 110000 },
  { weightRange: "5 – 10 kg", zone1: 70000, zone2: 100000, zone3: 135000, zone4: 175000 },
  { weightRange: "10 – 20 kg", zone1: 120000, zone2: 170000, zone3: 230000, zone4: 300000 },
  { weightRange: "20 – 30 kg", zone1: 180000, zone2: 260000, zone3: 350000, zone4: 450000 },
];

// International Inbound rates (IQD)
const intlInboundRates: RateRow[] = [
  { weightRange: "0 – 0.5 kg", zone1: 12000, zone2: 18000, zone3: 25000, zone4: 35000 },
  { weightRange: "0.5 – 1 kg", zone1: 18000, zone2: 28000, zone3: 38000, zone4: 50000 },
  { weightRange: "1 – 2 kg", zone1: 25000, zone2: 40000, zone3: 52000, zone4: 68000 },
  { weightRange: "2 – 5 kg", zone1: 40000, zone2: 58000, zone3: 78000, zone4: 100000 },
  { weightRange: "5 – 10 kg", zone1: 62000, zone2: 90000, zone3: 120000, zone4: 160000 },
  { weightRange: "10 – 20 kg", zone1: 105000, zone2: 155000, zone3: 210000, zone4: 275000 },
  { weightRange: "20 – 30 kg", zone1: 165000, zone2: 240000, zone3: 320000, zone4: 410000 },
];

const intlZones = [
  { id: "zone1", label: "Zone 1", description: "Middle East" },
  { id: "zone2", label: "Zone 2", description: "Europe & Turkey" },
  { id: "zone3", label: "Zone 3", description: "Asia & Africa" },
  { id: "zone4", label: "Zone 4", description: "Americas & Oceania" },
];

// Local delivery services
const localServices: LocalService[] = [
  {
    name: "Standard Delivery",
    description: "Regular delivery within Kurdistan Region (2–4 business days)",
    weightRanges: [
      { range: "0 – 1 kg", price: 5000 },
      { range: "1 – 3 kg", price: 7500 },
      { range: "3 – 5 kg", price: 10000 },
      { range: "5 – 10 kg", price: 15000 },
      { range: "10 – 20 kg", price: 22000 },
      { range: "20 – 30 kg", price: 30000 },
    ],
  },
  {
    name: "Express Delivery",
    description: "Same-day or next-day delivery within Kurdistan Region",
    weightRanges: [
      { range: "0 – 1 kg", price: 8000 },
      { range: "1 – 3 kg", price: 12000 },
      { range: "3 – 5 kg", price: 16000 },
      { range: "5 – 10 kg", price: 24000 },
      { range: "10 – 20 kg", price: 35000 },
      { range: "20 – 30 kg", price: 48000 },
    ],
  },
  {
    name: "Inter-City (Rest of Iraq)",
    description: "Delivery to cities outside Kurdistan Region (3–6 business days)",
    weightRanges: [
      { range: "0 – 1 kg", price: 8000 },
      { range: "1 – 3 kg", price: 12000 },
      { range: "3 – 5 kg", price: 17000 },
      { range: "5 – 10 kg", price: 25000 },
      { range: "10 – 20 kg", price: 38000 },
      { range: "20 – 30 kg", price: 52000 },
    ],
  },
  {
    name: "Document Delivery",
    description: "Secure delivery for documents and official papers",
    weightRanges: [
      { range: "0 – 0.5 kg", price: 4000 },
      { range: "0.5 – 1 kg", price: 6000 },
      { range: "1 – 2 kg", price: 8000 },
    ],
  },
];



const RateCalculator = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("international");

  // International state
  const [intlDirection, setIntlDirection] = useState<"inbound" | "outbound" | null>(null);
  const [calcWeight, setCalcWeight] = useState("");
  const [calcLocalService, setCalcLocalService] = useState("");
  const [calcResult, setCalcResult] = useState<{ price: number; label: string } | null>(null);
  const [localPackageType, setLocalPackageType] = useState("pak");
  const [localWeight, setLocalWeight] = useState("1");
  const [packageType, setPackageType] = useState("box");
  const [serviceType, setServiceType] = useState("express");

  // Box dimensions
  interface BoxRow { length: number; width: number; height: number; weight: number }
  const [boxes, setBoxes] = useState<BoxRow[]>([{ length: 10, width: 10, height: 10, weight: 1 }]);

  const updateBox = (index: number, field: keyof BoxRow, value: number) => {
    setBoxes((prev) => prev.map((b, i) => (i === index ? { ...b, [field]: value } : b)));
  };
  const addBox = () => setBoxes((prev) => [...prev, { length: 10, width: 10, height: 10, weight: 1 }]);
  const duplicateBox = (index: number) => setBoxes((prev) => [...prev, { ...prev[index] }]);
  const deleteBox = (index: number) => setBoxes((prev) => prev.length > 1 ? prev.filter((_, i) => i !== index) : prev);

  const volWeight = (b: BoxRow) => (b.length * b.width * b.height) / 5000;
  const totalWeight = boxes.reduce((s, b) => s + b.weight, 0);
  const totalVolWeight = boxes.reduce((s, b) => s + volWeight(b), 0);
  const chargeableWeight = Math.max(totalWeight, totalVolWeight);

  // Address state
  interface LocationData { lat: number; lng: number; displayName: string }
  const [pickupAddress, setPickupAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [localPickupAddress, setLocalPickupAddress] = useState("");
  const [localDeliveryAddress, setLocalDeliveryAddress] = useState("");
  const [localPickupLocation, setLocalPickupLocation] = useState<LocationData | null>(null);
  const [localDeliveryLocation, setLocalDeliveryLocation] = useState<LocationData | null>(null);
  const [intlPickupLocation, setIntlPickupLocation] = useState<LocationData | null>(null);
  const [intlDeliveryLocation, setIntlDeliveryLocation] = useState<LocationData | null>(null);

  // Map picker state
  const [mapPickerOpen, setMapPickerOpen] = useState(false);
  const [mapPickerTarget, setMapPickerTarget] = useState<"intlPickup" | "intlDelivery" | "localPickup" | "localDelivery">("intlPickup");

  const handleSelectFromSaved = () => {
    toast.info("Saved addresses will be available after login", { description: "This feature requires an account." });
  };

  const openMapPicker = (target: typeof mapPickerTarget) => {
    setMapPickerTarget(target);
    setMapPickerOpen(true);
  };

  const handleMapConfirm = (location: { lat: number; lng: number; displayName: string }) => {
    const shortName = location.displayName.split(",").slice(0, 2).join(",").trim();
    switch (mapPickerTarget) {
      case "intlPickup":
        setPickupAddress(shortName);
        setIntlPickupLocation(location);
        break;
      case "intlDelivery":
        setDeliveryAddress(shortName);
        setIntlDeliveryLocation(location);
        break;
      case "localPickup":
        setLocalPickupAddress(shortName);
        setLocalPickupLocation(location);
        break;
      case "localDelivery":
        setLocalDeliveryAddress(shortName);
        setLocalDeliveryLocation(location);
        break;
    }
  };

  const getMapPickerTitle = () => {
    switch (mapPickerTarget) {
      case "intlPickup":
        return intlDirection === "inbound" ? "Select Pickup Location Outside Iraq" : "Select Pickup Location in Iraq";
      case "intlDelivery":
        return intlDirection === "inbound" ? "Select Delivery Location in Iraq" : "Select Delivery Location Outside Iraq";
      case "localPickup":
        return "Select Pickup Location";
      case "localDelivery":
        return "Select Delivery Location";
    }
  };

  const getMapPickerDescription = () => {
    if (mapPickerTarget === "intlPickup" && intlDirection === "inbound") return "Please select a location outside Iraq boundaries";
    if (mapPickerTarget === "intlDelivery" && intlDirection === "outbound") return "Please select a location outside Iraq boundaries";
    return "Please select a location on the map";
  };

  const calculateRate = () => {
    if (activeTab === "international") {
      if (!intlDirection) return;
      const w = chargeableWeight;
      if (w <= 0) return;
      const isOutbound = intlDirection === "outbound";
      const zoneKey = "zone1" as keyof RateRow;
      const rates = isOutbound ? intlOutboundRates : intlInboundRates;
      const row = rates.find((r) => {
        const [min, max] = r.weightRange.replace(" kg", "").split("–").map((s) => parseFloat(s.trim()));
        return w > min && w <= max;
      }) || rates[rates.length - 1];
      const direction = isOutbound ? "Outbound" : "Inbound";
      setCalcResult({
        price: row[zoneKey] as number,
        label: `${direction} • Zone 1 (Middle East) • ${row.weightRange} • Chargeable: ${w.toFixed(1)} kg`,
      });
    } else {
      if (!calcLocalService) return;
      const service = localServices.find((s) => s.name === calcLocalService);
      if (!service) return;
      const showWeight = localPackageType === "pak" || localPackageType === "envelope";
      const w = showWeight ? parseFloat(localWeight) : 0;
      if (showWeight && (!w || w <= 0)) {
        toast.error("Please enter a valid weight");
        return;
      }
      if (showWeight) {
        const wr = service.weightRanges.find((r) => {
          const [min, max] = r.range.replace(" kg", "").split("–").map((s) => parseFloat(s.trim()));
          return w > min && w <= max;
        }) || service.weightRanges[service.weightRanges.length - 1];
        setCalcResult({
          price: wr.price,
          label: `${service.name} • ${wr.range} • ${w} kg`,
        });
      } else {
        setCalcResult({
          price: service.weightRanges[0].price,
          label: `${service.name} • Starting from`,
        });
      }
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCalcResult(null);
    setCalcWeight("");
    setIntlDirection(null);
    setCalcLocalService("");
  };

  return (
    <>
      {/* Hero */}
      <PageHero image={heroImages.rateCalculator}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">
              {t("footer.rateCalc")}
            </h1>
            <p className="text-primary-foreground/80 max-w-xl">
              View our delivery rates for international and local services. Use the calculator to estimate your shipping cost.
            </p>
          </PageHero>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 h-12 mb-10">
              <TabsTrigger value="local" className="gap-2 text-sm font-bold">
                <Truck className="w-4 h-4" /> Pickup & Delivery
              </TabsTrigger>
              <TabsTrigger value="international" className="gap-2 text-sm font-bold">
                <Send className="w-4 h-4" /> International
              </TabsTrigger>
            </TabsList>

            {/* ── International Tab ── */}
            <TabsContent value="international">
              <div className="max-w-4xl mx-auto space-y-8">
                {!intlDirection ? (
                  /* Step 1: Select Direction */
                  <div className="space-y-6">
                    <h2 className="text-xl md:text-2xl font-display font-bold text-center text-foreground">Select Order Direction</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Inbound */}
                      <button
                        onClick={() => setIntlDirection("inbound")}
                        className="group rounded-xl border-2 border-border bg-card p-8 text-center space-y-4 transition-all hover:border-primary/40 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <Globe className="w-10 h-10 text-primary" />
                          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                          <Home className="w-10 h-10 text-secondary" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground">Inbound</h3>
                        <p className="text-muted-foreground text-sm">International pickup → Domestic delivery</p>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          From International to Domestic
                        </span>
                      </button>

                      {/* Outbound */}
                      <button
                        onClick={() => setIntlDirection("outbound")}
                        className="group rounded-xl border-2 border-border bg-card p-8 text-center space-y-4 transition-all hover:border-primary/40 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <Home className="w-10 h-10 text-secondary" />
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                          <Globe className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground">Outbound</h3>
                        <p className="text-muted-foreground text-sm">Domestic pickup → International delivery</p>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold">
                          From Domestic to International
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Details form */
                  <div className="space-y-8">
                    {/* Direction banner */}
                    <div className="flex items-center justify-between bg-muted rounded-xl px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${intlDirection === "inbound" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"}`}>
                          {intlDirection === "inbound" ? "Inbound Order" : "Outbound Order"}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {intlDirection === "inbound" ? "International pickup → Domestic delivery" : "Domestic pickup → International delivery"}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => { setIntlDirection(null); setCalcResult(null); setCalcWeight(""); }}>
                        Change Direction
                      </Button>
                    </div>

                    {/* Pickup & Delivery Address */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-primary/20">
                        <CardContent className="p-5 space-y-4">
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-primary" />
                            <h3 className="font-display font-bold text-foreground">
                              Pickup Address ({intlDirection === "inbound" ? "International" : "Domestic"})
                            </h3>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-10 text-sm gap-2" onClick={handleSelectFromSaved}>
                              <MapPin className="w-3.5 h-3.5" /> Select from Saved
                            </Button>
                            <Button variant="outline" className="h-10 text-sm gap-2" onClick={() => openMapPicker("intlPickup")}>
                              <MapPin className="w-3.5 h-3.5" /> Select on Map
                            </Button>
                          </div>
                          {intlPickupLocation && (
                            <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground" />
                                  <div>
                                    <p className="text-sm font-semibold text-foreground">Selected Location</p>
                                    <p className="text-xs text-muted-foreground">{intlPickupLocation.lat.toFixed(6)}, {intlPickupLocation.lng.toFixed(6)}</p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setIntlPickupLocation(null); setPickupAddress(""); }}>
                                  <RotateCcw className="w-4 h-4" />
                                </Button>
                              </div>
                              <p className="text-sm text-foreground">{intlPickupLocation.displayName}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      <Card className="border-accent/30 bg-accent/5">
                        <CardContent className="p-5 space-y-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent-foreground" />
                            <h3 className="font-display font-bold text-foreground">
                              Delivery Address ({intlDirection === "inbound" ? "Domestic" : "International"})
                            </h3>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-10 text-sm gap-2" onClick={handleSelectFromSaved}>
                              <MapPin className="w-3.5 h-3.5" /> Select from Saved
                            </Button>
                            <Button variant="outline" className="h-10 text-sm gap-2" onClick={() => openMapPicker("intlDelivery")}>
                              <MapPin className="w-3.5 h-3.5" /> Select on Map
                            </Button>
                          </div>
                          {intlDeliveryLocation && (
                            <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-muted-foreground" />
                                  <div>
                                    <p className="text-sm font-semibold text-foreground">Selected Location</p>
                                    <p className="text-xs text-muted-foreground">{intlDeliveryLocation.lat.toFixed(6)}, {intlDeliveryLocation.lng.toFixed(6)}</p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setIntlDeliveryLocation(null); setDeliveryAddress(""); }}>
                                  <RotateCcw className="w-4 h-4" />
                                </Button>
                              </div>
                              <p className="text-sm text-foreground">{intlDeliveryLocation.displayName}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    {/* Package Details */}
                    <Card className="border-border">
                      <CardContent className="p-5 space-y-5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                            <Package className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <h3 className="font-display font-bold text-foreground">Package Details</h3>
                        </div>

                        {/* Top selectors row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div>
                            <label className="text-sm font-semibold mb-1.5 block">Package Type</label>
                            <Select value={packageType} onValueChange={setPackageType}>
                              <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="box">Box</SelectItem>
                                <SelectItem value="pak">Pak</SelectItem>
                                <SelectItem value="envelope">Envelope</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Box Dimensions */}
                        {packageType === "box" && (
                          <div className="space-y-3">
                            <h4 className="font-display font-bold text-foreground">Box Dimensions</h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border text-left text-muted-foreground">
                                    <th className="py-2 px-2 w-10 font-semibold">#</th>
                                    <th className="py-2 px-2 font-semibold">Length (cm)</th>
                                    <th className="py-2 px-2 font-semibold">Width (cm)</th>
                                    <th className="py-2 px-2 font-semibold">Height (cm)</th>
                                    <th className="py-2 px-2 font-semibold">Vol. Weight (kg)</th>
                                    <th className="py-2 px-2 font-semibold text-center">Duplicate</th>
                                    <th className="py-2 px-2 font-semibold text-center">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {boxes.map((box, i) => (
                                    <tr key={i} className="border-b border-border/50">
                                      <td className="py-2 px-2 text-muted-foreground font-medium">{i + 1}</td>
                                      <td className="py-2 px-2">
                                        <Input type="number" value={box.length} onChange={(e) => updateBox(i, "length", parseFloat(e.target.value) || 0)} className="h-9" />
                                      </td>
                                      <td className="py-2 px-2">
                                        <Input type="number" value={box.width} onChange={(e) => updateBox(i, "width", parseFloat(e.target.value) || 0)} className="h-9" />
                                      </td>
                                      <td className="py-2 px-2">
                                        <Input type="number" value={box.height} onChange={(e) => updateBox(i, "height", parseFloat(e.target.value) || 0)} className="h-9" />
                                      </td>
                                      <td className="py-2 px-2">
                                        <div className="h-9 flex items-center justify-center bg-muted rounded-md text-sm font-medium">
                                          {volWeight(box).toFixed(1)}
                                        </div>
                                      </td>
                                      <td className="py-2 px-2 text-center">
                                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => duplicateBox(i)}>
                                          <Copy className="w-3.5 h-3.5" />
                                        </Button>
                                      </td>
                                      <td className="py-2 px-2 text-center">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => deleteBox(i)} disabled={boxes.length <= 1}>
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </Button>
                                      </td>
                                    </tr>
                                  ))}
                                  <tr className="font-semibold">
                                    <td className="py-3 px-2" colSpan={4}>Total</td>
                                    <td className="py-3 px-2">
                                      <div className="h-9 flex items-center justify-center bg-muted rounded-md">
                                        {totalVolWeight.toFixed(1)}
                                      </div>
                                    </td>
                                    <td colSpan={2}></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="flex items-center justify-between">
                              <Button variant="default" size="sm" className="gap-1.5 font-bold" onClick={addBox}>
                                <Plus className="w-3.5 h-3.5" /> Add Box
                              </Button>
                              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
                                <span className="text-sm font-semibold text-secondary-foreground">Chargeable Weight:</span>
                                <span className="px-3 py-1 rounded-md border border-border bg-card font-bold text-sm">{chargeableWeight.toFixed(1)} kg</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Calculate */}
                    <Button onClick={calculateRate} className="w-full h-12 font-bold text-base">
                      <Calculator className="w-4 h-4 me-2" /> Calculate Rate
                    </Button>

                    {/* Result */}
                    {calcResult && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <Card className="border-primary/20">
                          <CardContent className="p-6 text-center space-y-2">
                            <p className="text-xs text-muted-foreground">{calcResult.label}</p>
                            <p className="text-3xl font-display font-extrabold text-primary">{calcResult.price.toLocaleString()} IQD</p>
                            <p className="text-sm text-muted-foreground">International Shipping Cost</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* ── Local Delivery Tab ── */}
            <TabsContent value="local">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Pickup & Delivery Address */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pickup Address */}
                  <Card className="border-primary/20">
                    <CardContent className="p-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <Truck className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-foreground">Pickup Address</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-10 text-sm gap-2" onClick={handleSelectFromSaved}>
                          <MapPin className="w-3.5 h-3.5" /> Select from Saved
                        </Button>
                        <Button variant="outline" className="h-10 text-sm gap-2" onClick={() => openMapPicker("localPickup")}>
                          <MapPin className="w-3.5 h-3.5" /> Select on Map
                        </Button>
                      </div>
                      {localPickupLocation && (
                        <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">Selected Location</p>
                                <p className="text-xs text-muted-foreground">{localPickupLocation.lat.toFixed(6)}, {localPickupLocation.lng.toFixed(6)}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setLocalPickupLocation(null); setLocalPickupAddress(""); }}>
                              <RotateCcw className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-foreground">{localPickupLocation.displayName}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Delivery Address */}
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="p-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-accent-foreground" />
                        </div>
                        <h3 className="font-display font-bold text-foreground">Delivery Address</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-10 text-sm gap-2" onClick={handleSelectFromSaved}>
                          <MapPin className="w-3.5 h-3.5" /> Select from Saved
                        </Button>
                        <Button variant="outline" className="h-10 text-sm gap-2" onClick={() => openMapPicker("localDelivery")}>
                          <MapPin className="w-3.5 h-3.5" /> Select on Map
                        </Button>
                      </div>
                      {localDeliveryLocation && (
                        <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">Selected Location</p>
                                <p className="text-xs text-muted-foreground">{localDeliveryLocation.lat.toFixed(6)}, {localDeliveryLocation.lng.toFixed(6)}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setLocalDeliveryLocation(null); setLocalDeliveryAddress(""); }}>
                              <RotateCcw className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-foreground">{localDeliveryLocation.displayName}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Select Service */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-foreground">Select Service</h3>
                  <div>
                    <label className="text-sm font-semibold mb-1.5 block">Delivery Service <span className="text-destructive">*</span></label>
                    <Select value={calcLocalService} onValueChange={setCalcLocalService}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a delivery service" />
                      </SelectTrigger>
                      <SelectContent>
                        {localServices.map((s) => (
                          <SelectItem key={s.name} value={s.name}>
                            <div className="flex flex-col">
                              <span className="font-medium">{s.name}</span>
                              <span className="text-xs text-muted-foreground">{s.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Calculate */}
                <Button onClick={calculateRate} className="w-full h-12 font-bold text-base" disabled={!calcLocalService}>
                  <Calculator className="w-4 h-4 me-2" /> Calculate Rate
                </Button>

                {calcResult && calcLocalService && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                    <div className="text-center p-6 bg-muted rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">{calcResult.label}</p>
                      <p className="text-3xl font-display font-extrabold text-primary">{calcResult.price.toLocaleString()} IQD</p>
                    </div>
                    {(() => {
                      const service = localServices.find((s) => s.name === calcLocalService);
                      if (!service) return null;
                      return (
                        <div className="overflow-x-auto rounded-xl border border-border">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-muted/60">
                                <th className="py-2.5 px-4 text-start font-semibold">Weight Range</th>
                                <th className="py-2.5 px-4 text-end font-semibold">Price (IQD)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.weightRanges.map((wr, i) => (
                                <tr key={i} className="border-t border-border hover:bg-muted/30">
                                  <td className="py-2.5 px-4">{wr.range}</td>
                                  <td className="py-2.5 px-4 text-end font-bold text-primary">{wr.price.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Map Picker Dialog */}
      <MapPickerDialog
        open={mapPickerOpen}
        onOpenChange={setMapPickerOpen}
        title={getMapPickerTitle()}
        description={getMapPickerDescription()}
        onConfirm={handleMapConfirm}
      />
    </>
  );
};

export default RateCalculator;