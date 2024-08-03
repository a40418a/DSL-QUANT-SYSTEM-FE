import React, { useState } from 'react';
import './myPage.css';
import { InputHalfBox } from '../../../components/box/inputBox/InputBox';
import { ColorBtn } from '../../../components/button/colorBtn/ColorBtn';
import { UserInfoDTO } from '../../../types/UserInfoDTO';
import { useNavigate } from 'react-router-dom';

export const MyPageCheck = () => {
    const [birthDate, setBirthDate] = useState('');
    const navigate = useNavigate();

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleSubmit = () => {
        const dto = new UserInfoDTO({
            userName: '',
            userPhone: '',
            userBirthday: birthDate,
            userGender: '',
            backtestRecords: [],
        });
        if (dto.getBirthDate() === '010418') {
            console.log(dto.getBirthDate());
            navigate('/mypage');
        } else {
            alert('생년월일이 일치하지 않습니다.');
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
