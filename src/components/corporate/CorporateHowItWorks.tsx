import { motion } from "framer-motion";
import { ClipboardList, Truck, Warehouse, Route, UserCheck, FileCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Order creation",
    desc: "Orders are created with full shipment details, including recipient information and delivery instructions.",
    extra: "Shipments are prepared, labeled, and organized for pickup.",
  },
  {
    num: "02",
    icon: Truck,
    title: "Pickup",
    desc: "Eagle Post collects shipments directly from the sender's location.",
    label: "At pickup:",
    bullets: ["Shipments are verified", "Quantity and condition are checked", "Items are scanned into the system"],
  },
  {
    num: "03",
    icon: Warehouse,
    title: "Warehouse and sorting",
    desc: "Shipments are transferred to Eagle Post facilities where they are:",
    bullets: ["Received and verified", "Scanned and registered", "Sorted based on delivery zones", "Prepared for dispatch"],
  },
  {
    num: "04",
    icon: Route,
    title: "Dispatch and routing",
    desc: "Deliveries are planned and assigned based on location and priority.",
    extra: "Routes are optimized and shipments are assigned to drivers.",
  },
  {
    num: "05",
    icon: UserCheck,
    title: "Delivery and verification",
    label: "Before delivery:",
    bullets: ["Recipient is contacted to confirm availability"],
    label2: "At delivery:",
    bullets2: [
      "Identity is verified using official ID",
      "Shipment is handed only to the intended recipient",
      "Digital signature is collected",
    ],
  },
  {
    num: "06",
    icon: FileCheck,
    title: "Completion and reporting",
    desc: "Delivery is confirmed with full traceability.",
    extra: "All shipments are recorded and included in reporting and reconciliation.",
  },
];

const CorporateHowItWorks = () => (
  <section className="py-20 md:py-28 bg-muted">
    <div className="container max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
      >
        <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-3">
          How it works
        </h2>
        <p className="text-muted-foreground">
          All corporate deliveries follow a structured and controlled workflow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="relative bg-background rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20">
                <step.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-primary">Step {step.num}</span>
            </div>
            <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
            {step.desc && <p className="text-muted-foreground text-sm leading-relaxed mb-2">{step.desc}</p>}
            {step.extra && <p className="text-muted-foreground text-sm leading-relaxed mb-2">{step.extra}</p>}
            {step.label && <p className="text-sm font-semibold text-foreground mt-3 mb-1">{step.label}</p>}
            {step.bullets && (
              <ul className="space-y-1 ms-1">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {step.label2 && <p className="text-sm font-semibold text-foreground mt-3 mb-1">{step.label2}</p>}
            {step.bullets2 && (
              <ul className="space-y-1 ms-1">
                {step.bullets2.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CorporateHowItWorks;
