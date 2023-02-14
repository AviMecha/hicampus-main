
export default ({history}) => {

    let unblock;
    useEffect(() => {
        unblock = history.block('정말 취소하시겠습니까?');
        return () => {
            if (unblock) {
                unblock();
            }
        };
    });

    const handlerCancel = () => {
        history.push('/');
    };

    const handlerApply = () => {
        if (unblock) { unblock(); }
        alert(`이름 : \n전화번호 : \n이메일 : `);
        history.push('./myPage/MyPage');
    };
    return (
        <>
            <h1 >수강 신청</h1>
            <div>
                이름 : <input type="text" /><br/>
                전화번호 : <input type="text" /><br/>
                생년월일 : <input type="text" /><br/>
            </div>
            <div>
                <button onClick={handlerCancel}>취소</button>
                <button onClick={handlerApply}>신청완료</button>
            </div>
        </>
    );
};
