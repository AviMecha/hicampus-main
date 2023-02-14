import React from 'react';
import { useHistory } from 'react-router-dom';
import './Lecture.css';


const Lecture1 = () => {

    const computerDevel = useHistory();
    function handleComDev() {
        computerDevel.push('/Lecture1')
    }

    const computerTax = useHistory();
    function handleComTax() {
        computerTax.push('/Lecture2');
    }

    const computerAbility = useHistory();
    function handleComAbil() {
        computerAbility.push('/Lecture3')
    }



    return (
        <>
        <div class="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">강의소개</div>
                <div class="list-group list-group-flush">
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComDev}>웹 개발자 과정</button>
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComTax}>전산 세무 과정</button>
                    <button class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleComAbil}>컴퓨터 활용능력 과정</button>
                </div>
            </div>

            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
 
            {/* <!-- Top navigation--> */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        <button class="btn btn-primary" id="sidebarToggle">수강신청하기</button>
                    </div>
                </nav>
                {/* <!-- Page content--> */}
                <div class="container-fluid">
                    <h1 class="mt-4">강사소개</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhu4ayt9WB9fxDKnm2A-RcR_arQ84jlXzMg&usqp=CAU"
                    alt="주방장스폰지밥" width="400" htight="400" align="center" border="0"></img>
                    <p>웹 개발은 집게리아 주방장 출신 스폰지밥!!</p>
                    <p>
                        바닷속 깊은 곳 파인애플 보글보글 스폰지밥
                    </p>
                </div>

                <div class="container-fluid">
                    <button class="btn bottom-primary" id="sidebarToggle">수강신청하기</button>
                </div>

            </div>
        </div>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    
        </>
    );
};

export default Lecture1;