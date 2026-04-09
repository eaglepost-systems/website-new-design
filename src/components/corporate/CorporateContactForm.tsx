import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const CorporateContactForm = () => {
  const [form, setForm] = useState({ company: "", name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.name || !form.phone) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Request submitted", description: "Our team will contact you within two business days." });
    setForm({ company: "", name: "", phone: "", email: "" });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(224_100%_20%)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
      </div>
      <div className="container relative z-10 max-w-xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-extrabold text-primary-foreground mb-5"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
        >
          Let us handle your delivery operations
        </motion.h2>
        <motion.p
          className="text-lg text-primary-foreground/80 mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
        >
          Move your delivery operations into a structured, regulated system.
          <br />
          Submit your request and our team will contact you within two business days.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-background text-foreground rounded-2xl p-6 md:p-8 shadow-2xl space-y-4 text-left border border-border"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
        >
          <div>
            <Label htmlFor="company">Company Name *</Label>
            <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg">
            Contact us
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default CorporateContactForm;
