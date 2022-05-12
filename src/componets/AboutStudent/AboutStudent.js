import './AboutStudent.css';
import foto from '../../images/3.jpg';

function AboutStudent(){

  return(
    <section className='aboutStudent'>
      <h2 className='aboutStudent__title'>О студенте</h2>
      <div className='aboutStudent__container'>
        <img src={foto} className='aboutStudent__foto' alt="Фото"></img>
        <div className='aboutStudent__info'>
          <h3 className='aboutStudent__name'>Имя Фамилия</h3>
          <p className='aboutStudent__decscription'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. 
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
          После того, как прошёл курс по веб- разработке, начал заниматься 
          фриланс-заказами и ушёл с постоянной работы.
          </p>
        </div>
      </div>
    </section>
  )


}

export default AboutStudent;