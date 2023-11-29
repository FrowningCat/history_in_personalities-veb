import Image from 'next/image';
import Link from 'next/link';
import p1 from '../../../public/person/philippePetain/p1.png';
import p2 from '../../../public/person/philippePetain/p2.png';
import p3 from '../../../public/person/philippePetain/p3.png';
import p4 from '../../../public/person/philippePetain/p4.png';

export default function Petain() {
    return (
        <div className="petain">
            <div className="petain__links">
                <div className="petain__links__a">
                    <a href="#1" className="petain__links__a__text link">
                        Франция после ПМВ
                    </a>
                    <a href="#2" className="petain__links__a__text link">
                        Экономическое состояние
                    </a>
                    <a href="#3" className="petain__links__a__text link">
                        Политическа стабильность в стране
                    </a>
                    <a href="#4" className="petain__links__a__text link">
                        Линия Мажинo
                    </a>
                    <a href="#5" className="petain__links__a__text link">
                        Вооружение
                    </a>
                    <a href="#6" className="petain__links__a__text link">
                        Союзс Великoбританией
                    </a>
                </div>
            </div>
            <div className="petain__title">Aнри Филипп Петен</div>
            <div className="petain__subtitle">Герой Предатель Патриот</div>
            <div className="petain__introductoryText">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                quo rerum dolorem eos ex, totam nesciunt doloremque nam id vel
                soluta molestias natus doloribus minima est quasi velit omnis
                iure.
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="1">
                        <text className="petain__blokTypeOne__text__title__letter">
                            Ф
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ц
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;п
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;П
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            М
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            В
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            По окончанию первой мировой войны франция потеряла
                            около 1,4 миллиона солдат, не меньшее число осталось
                            калеками. Доля призванных мужчин на военную службу
                            во Франции в возрасте 19–49 лет составила 80 %. При
                            этом в ходе войны французская пехота лишилась 22 %
                            своего боевого состава – молодых и здоровых мужчин,
                            а самые большие потери, около 30 %, понесла самая
                            молодая возрастная группа солдат 18–25 лет. Это
                            оказало существенное влияние на демографию и желание
                            вести новые войны.
                        </text>
                        <br />
                        <br />
                        <text>
                            Десятая часть страны лежала в руинах. Около 150 млрд
                            франков было потрачено на ведение войны, а 14 млрд
                            франков было утеряна после революции в России.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p1}
                        alt="p1"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p2}
                        alt="p2"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="2">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            Э
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            м
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ч
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            Сразу же в послевоенный период правительство
                            сосредоточило значительную часть всей своей энергии
                            на восстановлении экономики. Была принята обширная
                            программа по восстановлению опустошенных войной
                            территорий, и в основном правительство выполнило эту
                            задачу к 1925 году. Так, чтобы хоть как-то
                            компенсировать потери рабочей силы, иммиграционные
                            барьеры были снижены, и в страну хлынул
                            двухмиллионный поток иностранных рабочих.
                        </text>
                        <br />
                        <br />
                        <text>
                            К концу 1920-х годов укрепление национальной
                            финансовой системы начало показывать уверенный
                            экономический рост, и к 1927 году французская
                            индустриальная мощь уже в три раза начала превышать
                            довоенный уровень. Изменилась и структура занятости
                            населения. В послевоенные годы численность
                            городского населения Франции впервые превысила
                            численность сельского.
                        </text>
                        <br />
                        <br />
                        <text>
                            Но к 1935 году, когда великая депрессия докатилась и
                            до Франции, промышленное производство упало до 79 %
                            от уровня 1928 года, а экспорт – до 55 %.
                            Зарегистрированная безработица колебалась на уровне
                            менее 500 000 человек.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeThree">
                <div className="petain__blokTypeThree__text">
                    <div className="petain__blokTypeThree__text__title" id="3">
                        <text className="petain__blokTypeThree__text__title__letter">
                            П
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            ч
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeThree__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            б
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ь
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ь
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;в
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeThree__text__textual">
                        <text>
                            Пораженная позже других государств Великой
                            депрессией Франция с февраля 1934 года погружается в
                            серьезный и затяжной политический кризис. Третья
                            республика оказалась неспособной ответить на
                            политические и экономические вызовы времени.
                        </text>
                        <br />
                        <br />
                        <text>
                            Вместо того, чтобы противостоять внешним опасностям
                            как единой нацией, Франция с мая 1936 по апрель 1938
                            года была вовлечена во внутренние проблемы. В то
                            время, когда Германия день и ночь лихорадочно
                            выпускала оружие, промышленные предприятия Франции
                            были выведены из строя из-за трудовых споров,
                            забастовок и бегства капитала из страны.{' '}
                        </text>
                        <br />
                        <br />
                        <text>
                            За время кризиса, общее количество протестных акций
                            увеличилось в 10 раз, и составило 17000 в год, в
                            1936 году в протестах участвовало 2.5 миллиона
                            рабочих.
                        </text>
                        <br />
                        <br />
                        <text>
                            К сожалению, в период между двумя войнами народ
                            Франции страдал от недостатков политической системы
                            Третьей республики. В стране было слишком много
                            политических партий, в результате чего правительства
                            были очень нестабильны. С 1920 по 1939 год в франции
                            сменилось 42 кабинета. Интриги стали обычным
                            явлением. Кругом была коррупция. Лидеры различных
                            политических партий продолжали борьбу между собой и
                            не смогли подготовить страну к войне против
                            Германии.
                        </text>
                        <br />
                        <br />
                        <text>
                            Новая 40-часовая рабочая неделя, навязанная
                            правительством работодателю, не позволяла французам
                            конкурировать с энергично вооружаемыми Германией и
                            Италией, которые работали на своих фабриках
                            сверхурочно. Осенью 1937 года серия бесчинств
                            выявила существование «Секретного комитета
                            революционных действий», который получал оружие и
                            деньги из Германии и Италии для создания фашистского
                            правительства во Франции. Разоблачение заговора было
                            спущено на тормозах, так как в нем было замешано
                            слишком много лиц из армии и крупных финансов.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="4">
                        <text className="petain__blokTypeOne__text__title__letter">
                            Л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            я
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;М
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ж
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            o
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text></text>
                        <br />
                        <br />
                        <text>
                            Вместо строительства непрерывной линию Мажино, от
                            Швейцарских Альп до Ле-Манша, которое бы увеличило
                            шансы стран Бенилюкса на сближение с Германией,
                            Французское правительств выделило кредит на
                            постройку оборонительных сооружений соседям. К
                            сожалению, жесточайший кризис, ударивший по Франции
                            в 30 годы, свел к минимуму размер кредита и заставил
                            выдумывать альтернативный план на случай войны. По
                            новой стратегии, на юге немецкую армию должна
                            сдержать линия Мажино, до прибытия англичан, а на
                            севере Союзники должны выступить единым фронтом на
                            встречу противнику и навязать бой на территории
                            Бельгии. Но и этому план не суждено было сбыться,
                            так как вскоре Бельгийцы сообщили о своём
                            нейтралитете в случаи войны.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p3}
                        alt="p3"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
            <div className="petain__blokTypeTwo">
                <div className="petain__blokTypeTwo__img">
                    <Image
                        src={p4}
                        alt="p4"
                        className="petain__blokTypeTwo__img__imgSize linkImg"
                    />
                </div>
                <div className="petain__blokTypeTwo__text">
                    <div className="petain__blokTypeTwo__text__title" id="5">
                        <text className="petain__blokTypeTwo__text__title__letter">
                            В
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            у
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            ж
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeTwo__text__title__letter">
                            е
                        </text>
                    </div>
                    <div className="petain__blokTypeTwo__text__textual">
                        <text>
                            На кануне второй мировой войны, армия франции была
                            самой крупной в Европе, однако средний возврат
                            французских комдивов и комендантов превышал 60 лет,
                            а верховного командования 70. Генералы, прошедшие
                            первую мировую войну, были не готовы к изменившимся
                            условиям.
                        </text>
                        <br />
                        <br />
                        <text>
                            Из-за упомянутого выше кризиса вооружение
                            французской армии действительно отставала от
                            немецкого, но голословно заявлять о его
                            неэффективности, а уж нем более об отсутствии я не
                            буду. Те же танки хоть и отставали, в большей
                            степени, в технологическом плане от немецких, но вот
                            численно их было больше, от чего они играли не в
                            роли прорыва, а в роли поддержки. Кроме того,
                            дивизии располагавшие в своем составе современные
                            танки и находившиеся в середине мая на бельгийском
                            направлена, вполне успешно дали бой немецкому 16
                            моторизованному корпусу. Не стоит забывать и про
                            битву при Анню, крупнейшее танковое сражении того
                            времени, где немецкий силы потеряли от 50 до 164
                            танков, из … , а французская армия от 100 до 170
                            машин из … . В заключении скажу, Французы проиграли
                            не из-за отсталого вооружение, а скорее из-за более
                            хорошей тактики немецких генералов. К 1939 году
                            французская армия насчитывала около 900 000 человек.
                            Помимо этого числа рядовых, у французов было 5
                            миллионов резервистов, прошедших некоторую военную
                            подготовку.
                        </text>
                    </div>
                </div>
            </div>
            <div className="petain__blokTypeOne">
                <div className="petain__blokTypeOne__text">
                    <div className="petain__blokTypeOne__text__title" id="6">
                        <text className="petain__blokTypeOne__text__title__letter">
                            С
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            о
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            ю
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            з
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;с
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            &nbsp;В
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            л
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            к
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            o
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            б
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            р
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            т
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            а
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            н
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            и
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            е
                        </text>
                        <text className="petain__blokTypeOne__text__title__letter">
                            й
                        </text>
                    </div>
                    <div className="petain__blokTypeOne__text__textual">
                        <text>
                            Это может показаться странным, но во Франции и до
                            войны на союз с Великобританией многие смотрели
                            довольно скептически, а после катастрофы в Дюнкерке
                            уж подавно. Антанта в первой мировой войне и перед
                            второй, это два совершенно разных по силе союза, где
                            второй значительно уступает. У людей были сомнения
                            “а не бросят ли их британцы, предпочтя отсиживаться
                            у себя на континенте, оставив францию у себя на
                            материке один на один с Германией. Не разумнее ли
                            сразу заключить с этой Германией союз”. К сожалению
                            речь не идет о маргинальной прослойки населения,
                            речь идет о довольно крупной консервативно
                            наторенной части населения.
                        </text>
                    </div>
                </div>
                <div className="petain__blokTypeOne__img">
                    <Image
                        src={p3}
                        alt="p3"
                        className="petain__blokTypeOne__img__imgSize linkImg"
                    />
                </div>
            </div>
        </div>
    );
}
