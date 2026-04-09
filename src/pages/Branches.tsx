import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, Handshake, Store } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";
import { Button } from "@/components/ui/button";

const Branches = () => (
  <>
    <PageHero image={heroImages.branches}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Our Branches</h1>
      <p className="text-primary-foreground/80 max-w-2xl">Our Branches are available throughout KRI, provided through our own official branches and partner branches.</p>
    </PageHero>

    {/* Google Maps Embed */}
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">Find Us on the Map</h2>
        <div className="rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1R4rvb1juVdyP8QJbUSq7UY-MrUMnK9M"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Eagle Post Locations Map"
          />
        </div>
      </div>
    </section>

    {/* Main Branch */}
    <section className="pb-12 md:pb-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">Our Branch</h2>
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="h-full border-border">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-lg mb-3">Main Branch</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/Czh3LrBtpUyQgGhw6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
                    >
                      40 Meter Street, Ster Tower, Erbil
                    </a>
                  </p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /> +964 750 596 4000</p>
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Sat–Thu: 9am–5pm</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Partner Branches */}
    <section className="pb-16 md:pb-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
            <Handshake className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Partner Branches</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner branches are service points operated by other businesses across Iraq. They serve as official Eagle Post postal service points, helping customers send parcels locally and internationally.
          </p>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-8 text-center">
              <Store className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">Become a Partner Branch</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Share your branch with Eagle Post and become an official postal service point. Help customers send parcels locally and internationally while earning commission on every order.
              </p>
              <a href="/contact">
                <Button size="lg">
                  Contact Us <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </>
);

export default Branches;
