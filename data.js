// data.js - Separating data and logic for maintainability

// Chapter Data Array (moved from index.html)
const chapterData = [
  { id: "CH-01", name: "Module (Only PDF)", folderId: "1RURCAKi3Jk4OfvGzxSLgu93dXTgaKg2d", lectureProgress: null, dppProgress: null },
  { id: "CH-02", name: "Practice Sheet || (Only PDF)", folderId: "1yzL-ukyZxXBVEb9qIsylXFBsKTFVNANz", lectureProgress: null, dppProgress: null },
  { id: "CH-03", name: "Advanced Maths", folderId: "PLACEHOLDER_ID_03", lectureProgress: null, dppProgress: null },
  { id: "CH-04", name: "IOQM Important Questions...", folderId: "1QBPsAZ9ojutVS0W26Oyly2T5FTLZLAIL", lectureProgress: "1/5", dppProgress: "0/3" },
  { id: "CH-05", name: "Basic Mathematics", folderId: "1DyBnVDO-X8H0sGP6JNSfcyrKwMLSgA2m", lectureProgress: "0/16", dppProgress: "0/13" },
  { id: "CH-06", name: "Number Theory (Part-01)", folderId: "1FcN0IYU_oIKpuk3wY69QQnZ-JjV1ER8M", lectureProgress: "0/11", dppProgress: "6/9" },
  { id: "CH-07", name: "Number Theory (Part-02)", folderId: "1id71eYdgbtJ-CQOsNTUvoFr6Yar-yNO4", lectureProgress: "1/5", dppProgress: "0/3" },
  { id: "CH-08", name: "Number Theory (Part-03)", folderId: "17sPFmorHGJAV6ZDfCi25ffeP_uoeWslB", lectureProgress: "5/7", dppProgress: "1/9" },
  { id: "CH-09", name: "Algebra (Polynomial and...", folderId: "18GXWdEp8U9yBPQsEFc5vej2kjo_e9Gc5", lectureProgress: "0/10", dppProgress: "0/10" },
  { id: "CH-10", name: "Algebra (Sequence and Series)", folderId: "17dfa5sCTiDCT_tgc5WDc-QFxW0_CQXU_", lectureProgress: "0/9", dppProgress: "0/9" },
  { id: "CH-11", name: "Recurrence Relation", folderId: "1_HN5YMnsAGR5-YdxkdzWwQDAIY3AYdxE", lectureProgress: "0/3", dppProgress: "0/2" },
  { id: "CH-12", name: "Inequalities", folderId: "1M0gRtFN9nLOsEeFn4qHkaF5ef_Lw_TvF", lectureProgress: "0/7", dppProgress: "0/6" },
  { id: "CH-13", name: "Geometry (Triangles)", folderId: "1qxo0U8VdXqO6QdO2l0nB0KL_jYV9aE6L", lectureProgress: "4/7", dppProgress: "0/7" },
  { id: "CH-14", name: "Geometry (Quadrilaterals and...", folderId: "1G26UxZQUYa095gyemGPouehBfPptmsoH", lectureProgress: "0/6", dppProgress: "0/5" },
  { id: "CH-15", name: "Geometry (Coordinate...", folderId: "1M5Jyepw-pgMrtrJR-DOgYKWWJdKaOucV", lectureProgress: "0/2", dppProgress: "0/1" },
  { id: "CH-16", name: "Binomial Theorem", folderId: "1Sx0ljTOvESvSE2zAvA4tw3bIE-MvqfxF", lectureProgress: "0/4", dppProgress: "0/3" },
  { id: "CH-17", name: "Combinatorics (Part-01)", folderId: "1f81qdesFou47uN66hhb9SQUGmcPAcdNK", lectureProgress: "0/9", dppProgress: "0/7" },
  { id: "CH-18", name: "Combinatorics (Part-02)", folderId: "1jz3cQyIXQSocLwQDbkeQLcB9YysGmskD", lectureProgress: "0/6", dppProgress: "0/6" },
  { id: "CH-19", name: "Probability", folderId: "16QKedia28GhNhiYSVGopSYB6lU_FeDc0", lectureProgress: "0/1", dppProgress: "0/1" },
  { id: "CH-20", name: "Algebra (Part-05)", folderId: "1DacTqoIBJu3WUlAxIRfemn8T75u1ajKY", lectureProgress: "0/2", dppProgress: "0/2" },
  { id: "CH-21", name: "Charcha Session", folderId: "PLACEHOLDER_ID_21", lectureProgress: "1/1", dppProgress: null },
  { id: "CH-22", name: "Doubt Session", folderId: "1hZbK0KYRNaBFrOqu_RPH4yk6Mfwuif-t", lectureProgress: "0/49", dppProgress: null },
  { id: "CH-23", name: "Extra Session", folderId: "1TGUaUVznJqg2xyr3wbr1qf_SqVlOaz0W", lectureProgress: "1/1", dppProgress: null },
];

document.addEventListener('DOMContentLoaded', () => {
    const chaptersGrid = document.getElementById("chapters-grid");

    chapterData.forEach(chapter => {
      // Use <a> tag for correct semantics, accessibility, and keyboard navigation
      const link = document.createElement("a");
      link.href = "#"; // Default href, will be updated on click
      link.className = "chapter-card";
      link.dataset.folderId = chapter.folderId;
      link.dataset.chapterName = chapter.name;
      link.setAttribute('role', 'link'); // Explicit role for screen readers
      link.setAttribute('aria-label', `View content for ${chapter.name}`);
      
      // Build the progress status HTML
      let statusHTML = '';
      if (chapter.lectureProgress || chapter.dppProgress) {
          statusHTML += '<div class="progress-status">';
          if (chapter.lectureProgress) { statusHTML += `Lecture: ${chapter.lectureProgress}`; }
          if (chapter.dppProgress) { statusHTML += ` &bull; DPP: ${chapter.dppProgress}`; }
          statusHTML += '</div>';
      }

      // Construct the card inner HTML (h3 changed to h2 for hierarchy)
      link.innerHTML = `
        <div class="card-header">
          <span class="chapter-tag">${chapter.id}</span>
          <h2 class="chapter-title">${chapter.name}</h2>
        </div>
        ${statusHTML}
        <span class="arrow">&rsaquo;</span>
      `;
      
      link.addEventListener('click', function(e) {
          const folderId = this.dataset.folderId;
          
          // *EXISTING ERROR HANDLING KEPT AS REQUESTED*
          if (folderId && !folderId.startsWith('PLACEHOLDER_ID_')) {
              window.location.href = `details.html?id=${folderId}&name=${encodeURIComponent(chapter.name)}`;
          } else {
              e.preventDefault(); // Prevent default link behavior
              alert(`ACTION REQUIRED: Please replace the placeholder ID for "${chapter.name}" in the chapterData array with your real Google Drive Folder ID.`);
              console.error(`Missing or incorrect folder ID for: ${chapter.name}`);
          }
      });

      chaptersGrid.appendChild(link);
    });
});