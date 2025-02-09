import HomeOptions from '../components/HomeOptions/HomeOptions';
import '../App.css';
import CoordinateSystemModal from '../components/modals/CoordinateSystemModal/CoordinateSystemModal';
import ToolOffsetPositionTableModal from '../components/modals/ToolOffsetPositionTableModal/ToolOffsetPositionTableModal';
import ToolLengthSensorPositionErrorTableModal from '../components/modals/ToolLengthSensorPositionErrorTableModal/ToolLengthSensorPositionErrorTableModal';
import SpindleControlModal from '../components/modals/SpindleControlModal/SpindleControlModal';
import SoftwareLimitModal from '../components/modals/SoftwareLimitModal/SoftwareLimitModal';
import parkingOptionModal from '../components/modals/ParkingOptionModal/ParkingOptionModal';

const Home = () => {

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6">
      <HomeOptions
        icon={<span>🌐</span>}
        title="Coordinate System"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🔧</span>}
        title="Tool Offset & Position Table"
        ModalComponent={ToolOffsetPositionTableModal}
      />
      <HomeOptions
        icon={<span>📏</span>}
        title="Tool Length Sensor Position & Error Table"
        ModalComponent={ToolLengthSensorPositionErrorTableModal}
      />
      <HomeOptions
        icon={<span>🔄</span>}
        title="Spindle Control"
        ModalComponent={SpindleControlModal}
      />
      <HomeOptions
        icon={<span>🛑</span>}
        title="Software Limit"
        ModalComponent={SoftwareLimitModal}
      />
      <HomeOptions
        icon={<span>🅿️</span>}
        title="Parking Options"
        ModalComponent={parkingOptionModal}
      />
    </div>
  );
}

export default Home;
