import React, { useState } from 'react';
import './myPageCheck.css';
import { InputHalf } from '../../../components/input/Input';
import { ColorBtn } from '../../../components/button/ColorBtn/ColorBtn';
import { MyPageCheckDTO } from '../../../dto/MyPageCheckDTO';

export const MyPageCheck = () => {
    const [birthDate, setBirthDate] = useState(''); //상태 생성 및 업데이트

    //변경 이벤트를 처리
    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    //버튼 클릭시
    const handleSubmit = () => {
        const dto = new MyPageCheckDTO(birthDate);
        // DTO를 사용하여 필요한 로직 처리
        console.log(dto.getBirthDate()); // 예시: 콘솔에 생년월일 출력
    };

    return (
        <div className="mypagecheck">
            <div className="mypagecheck-wrapper">
                <div className="mypagecheck-title">본인 여부 확인</div>
                <div className="mypagecheck-input-wrapper">
                    <InputHalf id="inputHalf" type="text" value={birthDate} onChange={handleBirthDateChange} />
                    <div className="mypagecheck-explain">
                        개인정보를 확인하기 위해서 생년월일을 입력해주세요(예: 010418)
                    </div>
                </div>
                <ColorBtn id="colorBtn" text="확인" onClick={handleSubmit} link="/mypage" />
            </div>
        </div>
    );
};
