import TelnyxLogo from "@/assets/TelnyxLogo";
import ConnectionStatus from "./ConnectionStatus";
import PreCallDiagnosisButton from "./PreCallDiagnosisButton";
import SDKVersionDropdown from "./SDKVersionDropdown";
import H4 from "./typography/H4";
import RegionSelect from "./RegionSelect";
const Header = () => {
  return (
    <header className="z-10 border-b bg-background">
      <div className="flex items-center h-20 gap-2 p-4 mx-auto">
        <H4>ATL5D Call Demo</H4>
        <SDKVersionDropdown />
        <RegionSelect />
        <PreCallDiagnosisButton />
        <div className="flex justify-end flex-1">
          <ConnectionStatus />
        </div>
      </div>
    </header>
  );
};

export default Header;
