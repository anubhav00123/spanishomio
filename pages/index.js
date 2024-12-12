import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import HeaderBanner from "@/components/HeaderBanner";
import SearchInput from "@/components/SearchInput";
import TextCard from "@/components/TextCard";
import Footerhead from "@/components/Footerhead";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <HeaderBanner />
        <SearchInput />
        <div
          className="container container-custom"
          style={{ paddingTop: "100px" }}
        >
          <div className="row">
            <div className="col-md-4">
              <TextCard
                imageSrc="images/icons/managing.svg"
                title="Manage my Bookings"
                items={[
                  "Cancel My Ticket",
                  "Change My Ticket",
                  "Travel Company Policies",
                  "Service Disruptions",
                ]}
              />
            </div>
            <div className="col-md-4">
              <TextCard
                imageSrc="images/icons/troubleshooting.svg"
                title="Troubleshooting"
                items={["Payment Support", "Accout Support"]}
              />
            </div>
            <div className="col-md-4">
              <TextCard
                imageSrc="images/icons/booking_omio.svg"
                title="Booking with Omio"
                items={["About omio", "FAQs", "Rail Passenger Rights"]}
              />
            </div>
          </div>
        </div>
        <Footerhead />
        <Footer />
      </>
    </>
  );
}
