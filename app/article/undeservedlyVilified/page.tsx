import Image from 'next/image';
import Link from 'next/link';
import philippePetain from '../../../public/article/PhilippePetain.png';
import ferdinandPorsche from '../../../public/article/FerdinandPorsche.png';
import cardinalRichelieu from '../../../public/article/CardinalRichelieu.png';
import guntherQuandt from '../../../public/article/GuntherQuandt.png';
import svg from '../../../public/article/menu-svgrepo.svg';

export default function undeservedlyVilified() {
    return (
        <div className="article">
            <div className="article__topBar	">
                <div className="article__topBar__name">
                    <div>HP</div>
                </div>
                <div className="article__topBar__links">
                    <div className="article__topBar__links__text link">
                        <Link href="/" className="link">
                            Главная страница
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/article" className="link">
                            Разделы
                            <div className="article__topBar__links__text__sections">
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyVilified"
                                        className="link"
                                    >
                                        Незаслуденно очерненные
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/undeservedlyExalted"
                                        className="link"
                                    >
                                        Незаслуденно возвеличены
                                    </Link>
                                </text>
                                <text className="article__topBar__links__text__sections__name link">
                                    <Link
                                        href="/article/crazyStories"
                                        className="link"
                                    >
                                        Безумные истории
                                    </Link>
                                </text>
                            </div>
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/partners" className="link">
                            Партнеры
                        </Link>
                    </div>
                    <div className="article__topBar__links__text link">
                        <Link href="/aboutUs" className="link">
                            О нас
                        </Link>
                    </div>
                </div>
            </div>
            <div className="article__title">Незаслуденно очерненные</div>
            <div className="article__personalities">
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={philippePetain}
                            alt="philippePetain"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/article/philippePetain">
                        <div className="article__personalities__persona__name link">
                            Aнри Филипп Петен
                        </div>
                    </Link>
                    <div className="article__personalities__persona__block">
                        <div className="article__personalities__persona__block__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, sed! Veritatis voluptatibus
                            accusamus culpa repellat magni vel est laboriosam
                            vero tenetur! Suscipit ad perspiciatis repellat
                            veniam, dignissimos nulla aperiam ea voluptatem sunt
                            dicta totam minus cupiditate similique molestiae
                            aliquam? Similique recusandae quam accusantium,
                            dolorem consectetur praesentium iusto asperiores
                            deserunt dolor? Sed velit distinctio deserunt
                            necessitatibus officiis dolorum consequatur! Id,
                            inventore.
                        </div>
                    </div>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={ferdinandPorsche}
                            alt="ferdinandPorsche"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Фердинанд Порше
                        </div>
                    </Link>
                    <div className="article__personalities__persona__block">
                        <div className="article__personalities__persona__block__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Optio quasi beatae doloribus tenetur
                            voluptates aliquam veniam perferendis rerum magni
                            consequatur?
                        </div>
                    </div>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={cardinalRichelieu}
                            alt="cardinalRichelieu"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Кардинал Ришелье
                        </div>
                    </Link>
                    <div className="article__personalities__persona__block">
                        <div className="article__personalities__persona__block__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Optio quasi beatae doloribus tenetur
                            voluptates aliquam veniam perferendis rerum magni
                            consequatur?
                        </div>
                    </div>
                </div>
                <div className="article__personalities__persona">
                    <div className="article__personalities__persona__img">
                        <Image
                            src={guntherQuandt}
                            alt="guntherQuandt"
                            className="article__personalities__persona__img__imgSize linkImg"
                        />
                    </div>
                    <Link href="/error404">
                        <div className="article__personalities__persona__name link">
                            Гюнтер Квандт
                        </div>
                    </Link>
                    <div className="article__personalities__persona__block">
                        <div className="article__personalities__persona__block__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Optio quasi beatae doloribus tenetur
                            voluptates aliquam veniam perferendis rerum magni
                            consequatur?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
