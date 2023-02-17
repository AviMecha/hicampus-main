import { useEffect } from "react";

export default () => {

    return (
        <>
            <h1 >수강 신청</h1>
            <div>
                이름 : <input type="text" /><br/>
                전화번호 : <input type="number" /><br/>
                이메일 : <input type="text" /><br/>
            </div>
            <div>
                <button>취소</button>
                <button>신청완료</button>
            </div>
        </>
    );
};
