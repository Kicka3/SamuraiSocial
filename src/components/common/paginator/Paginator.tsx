import React from "react";
import './paginator.css'


type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalUsersCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged
                                                        }) => {

    //Рассчитываю кол-во страниц
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    //НЕ ДОДЕЛАНО!
    //кликаешь на last el + 5 к стейту//
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return <>

        <nav className={'pagination-wrapper'}>
            <ul className={'pagination'}>
                <span className={'prev-btn'}>«</span>

                <div className={'page-number-wrapper'}>
                    {pages.map((pg, index) => {
                        return (<li key={index}
                                    className={currentPage === pg ? `selected-page` : 'page-number'}
                                    onClick={(e) => {
                                        onPageChanged(pg);
                                    }}>{pg}</li>
                        );
                    })}
                </div>
                <span className={'next-btn'}>»</span>
            </ul>
        </nav>
    </>
}


