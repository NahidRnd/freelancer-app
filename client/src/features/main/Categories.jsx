import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useCategories from "../../hooks/useCategories";

function Categories() {
    const {categories} = useCategories();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <div id="category" className='*:text-center'>
      <h3>
        کتگوری های محبوب
      </h3>
      <p className='pb-10'>
        کتگوری محبوب
      </p>
      <Slider {...settings}>
      {categories.map(card => (
        <div key={card.value} >
            <div className='border p-10 mx-4 rounded-lg'>
              <h3 className='text-center'>{card.label}</h3>
            </div>          
        </div>
      ))}
    </Slider>   
    </div>
  )
}

export default Categories
