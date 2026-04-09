import { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country ISO codes mapped to zones
const zoneMapping: Record<string, string> = {
  // Zone 1 — Middle East
  IRQ: "zone1", SAU: "zone1", ARE: "zone1", KWT: "zone1", BHR: "zone1",
  QAT: "zone1", OMN: "zone1", JOR: "zone1", LBN: "zone1", SYR: "zone1",
  YEM: "zone1", PSE: "zone1", ISR: "zone1", IRN: "zone1",
  // Zone 2 — Europe & Turkey
  TUR: "zone2", GBR: "zone2", DEU: "zone2", FRA: "zone2", ITA: "zone2",
  ESP: "zone2", NLD: "zone2", BEL: "zone2", SWE: "zone2", NOR: "zone2",
  DNK: "zone2", FIN: "zone2", POL: "zone2", CZE: "zone2", AUT: "zone2",
  CHE: "zone2", PRT: "zone2", GRC: "zone2", ROU: "zone2", HUN: "zone2",
  BGR: "zone2", HRV: "zone2", SVK: "zone2", SVN: "zone2", LTU: "zone2",
  LVA: "zone2", EST: "zone2", IRL: "zone2", LUX: "zone2", CYP: "zone2",
  MLT: "zone2", ISL: "zone2", SRB: "zone2", BIH: "zone2", ALB: "zone2",
  MKD: "zone2", MNE: "zone2", UKR: "zone2", MDA: "zone2", BLR: "zone2",
  RUS: "zone2", GEO: "zone2", ARM: "zone2", AZE: "zone2",
  // Zone 3 — Asia & Africa
  CHN: "zone3", JPN: "zone3", KOR: "zone3", IND: "zone3", PAK: "zone3",
  BGD: "zone3", THA: "zone3", VNM: "zone3", MYS: "zone3", SGP: "zone3",
  IDN: "zone3", PHL: "zone3", MMR: "zone3", KHM: "zone3", LAO: "zone3",
  NPL: "zone3", LKA: "zone3", AFG: "zone3", UZB: "zone3", KAZ: "zone3",
  TKM: "zone3", KGZ: "zone3", TJK: "zone3", MNG: "zone3", TWN: "zone3",
  EGY: "zone3", ZAF: "zone3", NGA: "zone3", KEN: "zone3", ETH: "zone3",
  GHA: "zone3", TZA: "zone3", MAR: "zone3", TUN: "zone3", DZA: "zone3",
  LBY: "zone3", SDN: "zone3", UGA: "zone3", MOZ: "zone3", AGO: "zone3",
  CMR: "zone3", CIV: "zone3", SEN: "zone3", COD: "zone3", ZMB: "zone3",
  ZWE: "zone3", BWA: "zone3", NAM: "zone3", RWA: "zone3", SOM: "zone3",
  // Zone 4 — Americas & Oceania
  USA: "zone4", CAN: "zone4", MEX: "zone4", BRA: "zone4", ARG: "zone4",
  COL: "zone4", CHL: "zone4", PER: "zone4", VEN: "zone4", ECU: "zone4",
  BOL: "zone4", PRY: "zone4", URY: "zone4", GUY: "zone4", SUR: "zone4",
  PAN: "zone4", CRI: "zone4", CUB: "zone4", DOM: "zone4", GTM: "zone4",
  HND: "zone4", SLV: "zone4", NIC: "zone4", JAM: "zone4", HTI: "zone4",
  TTO: "zone4", AUS: "zone4", NZL: "zone4", PNG: "zone4", FJI: "zone4",
};

const zoneColors: Record<string, string> = {
  zone1: "#e63946",
  zone2: "#457b9d",
  zone3: "#2a9d8f",
  zone4: "#e9a120",
};

const zoneLabels: Record<string, { label: string; description: string }> = {
  zone1: { label: "Zone 1", description: "Middle East" },
  zone2: { label: "Zone 2", description: "Europe & Turkey" },
  zone3: { label: "Zone 3", description: "Asia & Africa" },
  zone4: { label: "Zone 4", description: "Americas & Oceania" },
};

interface ZoneMapProps {
  selectedZone: string;
  onZoneSelect: (zoneId: string) => void;
}

const ZoneMap = memo(({ selectedZone, onZoneSelect }: ZoneMapProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-border overflow-hidden bg-muted/30">
        <ComposableMap
          projectionConfig={{ scale: 147, center: [30, 15] }}
          className="w-full h-auto"
          style={{ maxHeight: 420 }}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isoA3 = geo.properties.ISO_A3 || geo.id;
                  const zone = zoneMapping[isoA3];
                  const isSelected = zone === selectedZone;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        if (zone) onZoneSelect(zone);
                      }}
                      onMouseEnter={() => {
                        setHoveredCountry(isoA3);
                        setHoveredZone(zone || null);
                      }}
                      onMouseLeave={() => {
                        setHoveredCountry(null);
                        setHoveredZone(null);
                      }}
                      style={{
                        default: {
                          fill: zone
                            ? isSelected
                              ? zoneColors[zone]
                              : `${zoneColors[zone]}88`
                            : "#e5e7eb",
                          stroke: "#d1d5db",
                          strokeWidth: 0.4,
                          outline: "none",
                          cursor: zone ? "pointer" : "default",
                          transition: "fill 0.2s",
                        },
                        hover: {
                          fill: zone ? zoneColors[zone] : "#e5e7eb",
                          stroke: "#9ca3af",
                          strokeWidth: 0.6,
                          outline: "none",
                          cursor: zone ? "pointer" : "default",
                        },
                        pressed: {
                          fill: zone ? zoneColors[zone] : "#e5e7eb",
                          stroke: "#9ca3af",
                          strokeWidth: 0.4,
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Hover info */}
      {hoveredZone && (
        <p className="text-center text-xs text-muted-foreground">
          {hoveredCountry} — {zoneLabels[hoveredZone]?.label} ({zoneLabels[hoveredZone]?.description})
        </p>
      )}

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(zoneLabels).map(([zoneId, info]) => (
          <button
            key={zoneId}
            onClick={() => onZoneSelect(zoneId)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              selectedZone === zoneId
                ? "border-foreground/30 bg-foreground/5 scale-105"
                : "border-border hover:border-foreground/20"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: zoneColors[zoneId] }}
            />
            <span className="text-foreground">{info.label}</span>
            <span className="text-muted-foreground font-normal hidden sm:inline">{info.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

ZoneMap.displayName = "ZoneMap";

export default ZoneMap;
