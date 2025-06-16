// Tooltip.js
import React, { useState, useRef, useEffect } from "react";

const Tooltip = ({ children, content, position = "top" }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({});
  const tooltipRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    if (visible && tooltipRef.current && wrapperRef.current) {
      const tooltipEl = tooltipRef.current;
      const wrapperEl = wrapperRef.current;
      const rect = wrapperEl.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();

      const positions = {
        top: {
          top: rect.top - tooltipRect.height - 8 + window.scrollY,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
        },
        bottom: {
          top: rect.bottom + 8 + window.scrollY,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2 + window.scrollX,
        },
        left: {
          top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
          left: rect.left - tooltipRect.width - 8 + window.scrollX,
        },
        right: {
          top: rect.top + rect.height / 2 - tooltipRect.height / 2 + window.scrollY,
          left: rect.right + 8 + window.scrollX,
        },
      };

      setTooltipStyles({
        top: `${positions[position].top}px`,
        left: `${positions[position].left}px`,
      });
    }
  }, [visible, position]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className={`tooltip-box tooltip-${position}`}
          style={tooltipStyles}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
