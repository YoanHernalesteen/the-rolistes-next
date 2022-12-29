

import { Pagination } from 'react-bootstrap';


const PaginationList = (props) => {

    let active = props.currentPage;
    let items = [];

    let totalPages = 0;

    totalPages = Math.ceil(props.totalRecords/props.pageLimit);

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} onClick= {()=> props.clicked(number)} active={number === active} >
                {/* href="#top" */}
            {number}
            </Pagination.Item>,
        );
    }
    

    const paginationBasic = (

        <div>
            <Pagination size="sm">{items}</Pagination>
        </div>
    );

    return(paginationBasic);
};

export default PaginationList;



