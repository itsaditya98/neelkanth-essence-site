import Navigation from "../components/layouts/Navigation";
import Footer from "../components/layouts/Footer";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <>
    <Navigation />

    {/* ✅ Hero Section */}
        <section className="relative bg-gradient-hero from-primary/90 to-primary text-white py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Terms of Use</h1>        
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
              Welcome to the official website of Neel Kanth Traders. By using
              this website, you agree to these Terms of Use. If you do not agree
              with these terms, please do not continue using the site.
            </p>

            <p>
              All information on this website is provided for general
              informational purposes. While we make every effort to keep the
              content accurate and up to date, Neel Kanth Traders does not
              guarantee completeness, reliability, or accuracy of any product
              specifications, prices, or availability.
            </p>

            <p>
              Product names, logos, and trademarks shown here belong to their
              respective owners and are used for identification only. Neel Kanth Traders
              does not claim ownership or partnership unless specifically
              mentioned.
            </p>

            <p>
              Neel Kanth Traders shall not be liable for any direct or indirect
              losses arising from the use of this website or its content. Users
              are encouraged to confirm details directly before making purchase
              or business decisions.
            </p>

            <p>
              We may modify these Terms from time to time without prior notice.
              Your continued use of the website signifies acceptance of any
              updated version.
            </p>

            <p>
              For questions or clarifications, please contact us at{" "}
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

export default TermsOfUse;
