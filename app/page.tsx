import Bookmarks from "@/components/Bookmarks";
import Convert from "@/components/Convert";
import Convert2 from "@/components/Convert2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Bookmarks />
      <Convert />
      <Convert2 />
      <Convert2 />
      <Footer/>
    </div>
  );
}
