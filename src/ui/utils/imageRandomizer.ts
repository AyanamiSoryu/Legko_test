import img1 from '../../assets/mockData/images/90b29d2c5a91eab3b7d902130859ea8d.png';
import img2 from '../../assets/mockData/images/bar.png';
import img3 from '../../assets/mockData/images/c36dc2a3a05f766a51c531d72687faf5.png';
import img4 from '../../assets/mockData/images/cafe.png';
import img5 from '../../assets/mockData/images/ce733a7e4fa278158eca9de269c76f70.png';
import img6 from '../../assets/mockData/images/concert.png';
import img7 from '../../assets/mockData/images/tusit.png';
import img8 from '../../assets/mockData/images/vparke.png';

const imagesArray = [img1, img2, img3, img4, img5, img6, img7, img8];

const imageRandomizer = () => {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
};

export default imageRandomizer;
