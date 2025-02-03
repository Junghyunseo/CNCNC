import HomeOptions from '../components/HomeOptions/HomeOptions';
import '../App.css';
import CoordinateSystemModal from '../components/modals/CoordinateSystemModal';

const MDI = () => {

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
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>📏</span>}
        title="Tool Length Sensor Position/Error Table"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🔄</span>}
        title="Spindle Control"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🛑</span>}
        title="Software Limit"
        ModalComponent={CoordinateSystemModal}
      />
      <HomeOptions
        icon={<span>🅿️</span>}
        title="Parking Options"
        ModalComponent={CoordinateSystemModal}
      />
    </div>
  );
}

export default MDI;
