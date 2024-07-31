import React, { useState } from 'react';
import './myPage.css';
import { InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { MyPageCheckDTO } from '../../../types/MyPageCheckDTO';
import { useNavigate } from 'react-router-dom';

export const MyPageCheck = () => {
    const [birthDate, setBirthDate] = useState(''); // 상태 생성 및 업데이트
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 변경 이벤트를 처리
    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    // 버튼 클릭 시
    const handleSubmit = () => {
        const dto = new MyPageCheckDTO(birthDate);
        if (dto.getBirthDate() === '010418') {
            //010418은 예시로 설정한 값
            console.log(dto.getBirthDate());
            navigate('/mypage'); // 일치할 경우 마이페이지로 이동
        } else {
            alert('생년월일이 일치하지 않습니다.'); // 일치하지 않을 경우 경고창 표시
        }
    };

    return (
        <div className="mypagecheck">
            <div className="mypagecheck-wrapper">
                <div className="mypagecheck-title">본인 여부 확인</div>
                <div className="mypagecheck-input-wrapper">
                    <InputHalfBox id="inputHalf" type="text" value={birthDate} onChange={handleBirthDateChange} />
                    <div className="mypagecheck-explain">
                        개인정보를 확인하기 위해서 생년월일을 입력해주세요(예: 010418)
                    </div>
                </div>
                <ColorBtn id="colorBtn" text="확인" onClick={handleSubmit} />
            </div>
        </div>
    );
};
