import HomeOptions from '../components/HomeOptions/HomeOptions';
import '../App.css';
import CoordinateSystemModal from '../components/modals/CoordinateSystemModal/CoordinateSystemModal';
import ToolOffsetPositionTableModal from '../components/modals/ToolOffsetPositionTableModal/ToolOffsetPositionTableModal';
import SpindleControlModal from '../components/modals/SpindleControlModal/SpindleControlModal';
import parkingOptionModal from '../components/modals/ParkingOptionModal/ParkingOptionModal';

const Home = () => {

  return (
    <div>
      <HomeOptions
        icon={<span>🌐</span>}
        title="Coordinate System"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🔧</span>}
        title="Tool Offset/Position Table"
        ModalComponent={ToolOffsetPositionTableModal}
      />
      <HomeOptions
        icon={<span>📏</span>}
        title="Tool Length Sensor Position/Error Table"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🔄</span>}
        title="Spindle Control"
        ModalComponent={SpindleControlModal}
      />
      <HomeOptions
        icon={<span>🛑</span>}
        title="Software Limit"
        ModalComponent={CoordinateSystemModal}
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
