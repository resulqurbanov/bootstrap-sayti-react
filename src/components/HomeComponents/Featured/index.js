import React from "react";
import "./style.scss";
function Featured() {
  return (
    <div className="esasa">
      <div className="orta">
        <h1>A better way to start building.</h1>
        <div className="icons">
          <div class="f1">
            <div class="a1">
              <div id="i1" class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <h4>Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
            <div class="a2">
              <div id="i2" class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <h4>Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
          </div>
          <div class="f2">
          <div class="a1">
              <div id="i3" class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <h4>Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
            <div class="a2">
              <div id="i4" class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i class="fa-brands fa-tiktok"></i>
              </div>
              <h4>Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Featured;
