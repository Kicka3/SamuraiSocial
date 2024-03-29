import React, {useState} from "react";
import './paginator.css'


type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    const {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged
    } = props;

    //Рассчитываю кол-во страниц
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / pageSize));
    const leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    const rightPortionPageNumber = portionNumber * pageSize;

    return <>

        <nav className={'pagination-wrapper'}>
            <ul className={'pagination'}>
                {portionNumber > 1 &&
                   <span className={'prev-btn'} onClick={() => setPortionNumber(portionNumber - 1)}>«</span>
                }

                <div className={'page-number-wrapper'}>
                    {pages
                        .filter(pg => pg >= leftPortionPageNumber && pg <= rightPortionPageNumber)
                        .map((pg, index) => {
                            return (<li key={index}
                                        className={currentPage === pg ? `selected-page` : 'page-number'}
                                        onClick={(e) => {
                                            onPageChanged(pg);
                                        }}>{pg}</li>
                            );
                        })}
                </div>
                {portionCount > portionNumber &&
                   <span className={'next-btn'} onClick={() => setPortionNumber(portionNumber + 1)}>»</span>
                }
            </ul>
        </nav>
    </>
}


