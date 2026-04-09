import { useState, useCallback, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, RotateCcw } from "lucide-react";

interface MapPickerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  onConfirm: (location: { lat: number; lng: number; displayName: string }) => void;
  defaultCenter?: { lat: number; lng: number };
}

const DEFAULT_CENTER = { lat: 36.191, lng: 44.009 }; // Erbil

const MapPickerDialog = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  defaultCenter = DEFAULT_CENTER,
}: MapPickerDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [coords, setCoords] = useState(defaultCenter);
  const [displayName, setDisplayName] = useState("");
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setCoords(defaultCenter);
      setDisplayName("");
      setSearchQuery("");
    }
  }, [open, defaultCenter]);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`,
        { headers: { "Accept-Language": "en" } }
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const result = data[0];
        setCoords({ lat: parseFloat(result.lat), lng: parseFloat(result.lon) });
        setDisplayName(result.display_name);
      }
    } catch {
      // silently fail
    } finally {
      setSearching(false);
    }
  }, [searchQuery]);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleReset = () => {
    setCoords(defaultCenter);
    setDisplayName("");
    setSearchQuery("");
  };

  const handleConfirm = () => {
    onConfirm({
      lat: coords.lat,
      lng: coords.lng,
      displayName: displayName || `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`,
    });
    onOpenChange(false);
  };

  // Build OpenStreetMap embed URL with marker
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.05}%2C${coords.lat - 0.03}%2C${coords.lng + 0.05}%2C${coords.lat + 0.03}&layer=mapnik&marker=${coords.lat}%2C${coords.lng}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-5 pb-3">
          <DialogTitle className="font-display text-xl">{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>

        {/* Search */}
        <div className="px-5 pb-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for a location..."
                className="pl-10 h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 shrink-0"
              onClick={handleSearch}
              disabled={searching}
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="px-5">
          <div className="rounded-lg overflow-hidden border border-border" style={{ height: 400 }}>
            <iframe
              ref={mapRef}
              key={`${coords.lat}-${coords.lng}`}
              width="100%"
              height="100%"
              src={mapUrl}
              style={{ border: 0 }}
              title="OpenStreetMap location picker"
            />
          </div>
        </div>

        {/* Coordinates info */}
        <div className="px-5 py-3 text-center space-y-1">
          <p className="text-sm text-muted-foreground">
            Move the map to position the pin at your desired location or use the search above
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Coordinates: {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
          </p>
          {displayName && (
            <p className="text-xs text-foreground font-medium flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" /> {displayName.split(",").slice(0, 3).join(",")}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-border bg-muted/30">
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RotateCcw className="w-4 h-4" /> Reset
          </Button>
          <Button onClick={handleConfirm} className="gap-2 font-bold">
            <MapPin className="w-4 h-4" /> Confirm Location
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapPickerDialog;
