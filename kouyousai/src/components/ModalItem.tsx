"use client";
import { useState } from "react";
import "./modal.css";

export const ModalItem = ({ title, imagePath, time, description }: { title: string, imagePath: string, time: string, description: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // モーダル外側のクリックで閉じるためのハンドラー
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
        setIsModalOpen(false);
    }
  };

  return (
    <>
      <div>
        {/* イベント項目 */}
        {description ?
          <div className="item" onClick={() => {setIsModalOpen(true)}}>
            <img src={imagePath} alt={title} className="image" />
            <div className="text">
              <div className="title">{title}</div>
              <div className="time">{time}</div>
            </div>
          </div>
          :
          <div className="item">
            <div className="image" />
            <div className="text">
              <div className="title">{title}</div>
              <div className="time">{time}</div>
            </div>
          </div>
        }

        {/* モーダル */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="close-button" onClick={() => {setIsModalOpen(false)}}>
                    ×
                </button>
                <div className="time-modal">{time}</div>
                <img src={imagePath} alt={title} className="image-modal" />
                <div className="title-modal">{title}</div>
                {title === "ゲストステージ" ? 
                  <>
                    <div className="guest-name">スリムクラブ</div>
                    <div className="guest-description">『M-1グランプリ2010』準優勝</div>
                  </> : 
                <></>}
                <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
