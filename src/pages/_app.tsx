import Layout from "../components/Layout/Layout";
import RecoilNexus from "recoil-nexus";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageLayoutProps } from '@/Types/types';

export default function App({ Component: PageLayoutProps, pageProps : PageLayoutProps}): React.ReactElement | null {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
