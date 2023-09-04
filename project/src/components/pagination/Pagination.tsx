import { NavLink } from "react-router-dom"


export function Pagination({ page, pagesCounter, query }:{ page: number, pagesCounter: number, query: string }): JSX.Element {
  function buildPaginationScheme() {
    const prevPageNumber = +page - 1
    const nextPageNumber = +page + 1
    const scheme = [1, prevPageNumber, +page, nextPageNumber, pagesCounter]
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCounter)
    const set = new Set(filteredScheme)
    const result = Array.from(set)

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...')
    if (result[result.length - 2] + 1 !== result[result.length - 1]) result.splice(result.length - 1, 0, '...')
    return result
  }

  function renderPagination() {
    const paginationScheme = buildPaginationScheme()

    return paginationScheme.map((pageNumber, index) => {
      if (pageNumber == '...') {
        return (
          <li className="page-item" key={index}>
            <span className="page-link pe-none">{pageNumber}</span>
          </li>
        )
      }

      return (
        <li className="page-item" key={index}>
          <NavLink to={`/search/${query}/${pageNumber}`} className={({ isActive }) =>
            isActive ? "page-link active" : "page-link"
          }>
            {pageNumber}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className="pagination mt-5 m-auto">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {renderPagination()}
        </ul>
      </nav>
    </div>
  )
}
