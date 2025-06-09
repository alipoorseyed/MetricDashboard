import SlideBar from "./slideBar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#1e1e1e] min-h-screen max-2xl:pl-52 max-xld:pl-44 max-lgd:pl-40 max-md:pl-8 max-mdd:pl-4 pt-8 max-md:pt-10 max-mdd:pt-12 pr-8 max-lgd:pr-4 max-md:pr-8 max-mdd:pr-4 pb-8">
      <SlideBar />
      {children}
    </div>
  );
}