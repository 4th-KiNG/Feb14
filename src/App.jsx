import { fon, bear } from './assets';
import './App.css'
import { useState,useRef, useEffect } from 'react';



function App() {
  const [isUp, setUp] = useState(80)
  const BlockRef = useRef(null);
  function convertOpen(){
    document.querySelector('.list').classList.add('animoflist')
    setUp(20)
    document.querySelector('.main').classList.remove('shake')
    document.querySelector('.title').classList.add('close')
  }
  function ConvertClose(){
    if (isUp === 20){
      document.querySelector('.list').classList.remove('animoflist')
      setUp(80)
      document.querySelector('.main').classList.add('shake')
      document.querySelector('.title').classList.remove('close')
    }
  }
  return (
    <div className='screen' onClick={ConvertClose}>
      <div className='title'><h1>Click on me!</h1></div>
      <div className='main shake'>
      <div className='convert' onClick={convertOpen}>
        <div className='list'>
          <p ref={BlockRef}>Итак, Дашуля, поздравляю тебя с 14 февраля ! Все таки, это день Освобождения Ростова-на-Дону от фашистов, расстрел Чикатило, и, конечно, день влюбленных). Это немного не наш праздник, но все равно хочу поздравить тебя! Я очень рад нашему знакомству и общению (хоть оно у нас и очень своеобразное)). Я редко делаю тебе комплименты, что достаточно странно для меня, но это не меняет того, насколько ты красивая как внешне, так и внутренне. Серьёзно, у тебя прям ангельская внешность(особенно брови). Улыбайся чаще, радуй всех своей добротой и открытой душой. Не позволяй обижать себя и ставь на место всех тех, кто много на себя берет. Оставайся такой же интересной и не обижайся по пустякам). ❤️</p>
          <img src={bear} className='bear' alt="" />
        </div>
        <div className='polygon top' style={{clipPath: `polygon(0% 50%,52% ${isUp}%,100% 50%)`}}></div>
        <div className='polygon container'>
          
          <div className='polygon left'></div>
          <div className='polygon right'></div>
          <div className='polygon bot'></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
