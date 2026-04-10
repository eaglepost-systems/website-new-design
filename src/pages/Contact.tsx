import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import PageHero from "@/components/PageHero";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contactLinks";
import { heroImages } from "@/lib/heroImages";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
  };

  return (
    <>
      <PageHero image={heroImages.contact}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">{t("contact.title")}</h1>
            <p className="text-primary-foreground/80 max-w-2xl">For any concerns, inquiries or follow-ups regarding your delivery, please don't hesitate to contact us!</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Call Us */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
                <Card className="border-border">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{t("contact.callUs")}</h3>
                      <div className="text-muted-foreground text-sm space-y-0.5">
                        <p>+964 750 596 4000</p>
                        <p className="flex items-center gap-1.5">
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 transition-colors">
                            <WhatsappIcon className="w-4 h-4" />
                            {WHATSAPP_NUMBER}
                          </a>
                        </p>
                        <p>+964 775 400 0888</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Available on WhatsApp as well</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Live Chat */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="border-border">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">Live Chat</h3>
                      <p className="text-muted-foreground text-sm">Chat with our support team directly through the website or app.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-border">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">Send us email</h3>
                      <a href="mailto:info@eaglepost.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@eaglepost.com</a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Hours */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="border-border">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{t("contact.hoursLabel")}</h3>
                      <p className="text-muted-foreground text-sm">Our call center is available from 9am to 8pm Sat–Thu.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-display font-bold text-xl mb-6">{t("contact.formTitle")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder={t("contact.nameInput")} required className="h-11" />
                    <Input type="email" placeholder={t("contact.emailInput")} required className="h-11" />
                    <Input placeholder={t("contact.phoneInput")} className="h-11" />
                    <Textarea placeholder={t("contact.messageInput")} rows={4} required />
                    <Button type="submit" className="w-full bg-primary text-primary-foreground h-11 font-bold">
                      <Send className="w-4 h-4 me-2" /> {t("contact.sendBtn")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
