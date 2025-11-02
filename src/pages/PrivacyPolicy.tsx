import Navigation from "../components/layouts/Navigation";
import Footer from "../components/layouts/Footer";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
    <Navigation />

    {/* ✅ Hero Section */}
        <section className="relative bg-gradient-hero from-primary/90 to-primary text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>        
          </div>
    </section>

    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-12">
      
      <div className="max-w-3xl mx-auto">
        
        <Card className="shadow-lg border border-border">
          <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              <strong>Last updated:</strong> November 2025
            </p>

            <p>
              Neel Kanth Traders respects your privacy. This website is
              intended for informational purposes only. We do not collect,
              store, or share any personal information from visitors except
              information you voluntarily provide through our contact form or
              direct communication channels.
            </p>

            <p>
              Any information shared with us — such as your name, phone number,
              or email — will be used solely to respond to your inquiry and will
              not be sold, rented, or disclosed to third parties.
            </p>

            <p>
              This website may include links to manufacturer or partner sites.
              Neel Kanth Traders is not responsible for the content, privacy
              practices, or data policies of external websites.
            </p>

            <p>
              We may update this policy from time to time to reflect changes in
              our practices or applicable laws. Updates will be posted on this
              page.
            </p>

            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:info@neelkanthtraders.com"
                className="text-accent hover:underline"
              >
                info@neelkanthtraders.com
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
