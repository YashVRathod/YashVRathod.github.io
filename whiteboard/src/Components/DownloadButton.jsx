import React from 'react';
import { Panel, useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import { toPng } from 'html-to-image';
import DownloadIcon from '@mui/icons-material/Download';


function downloadImage(dataUrl) {
  const a = document.createElement('a');
  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1700;
const imageHeight = 900;

function DownloadButton() {
  const { getNodes } = useReactFlow();

  const onClick = () => {
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 0.5);

    toPng(document.querySelector('.react-flow__viewport'), {
      background: 'white',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);
  };

  return (
    <Panel position="top-right">
     <button
  className="download-btn"
  onClick={onClick}
  style={{
    background: 'linear-gradient(135deg, #f06, #f93)',
    marginTop:'1rem',
    marginRight:'5rem',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
  }}
>
  <DownloadIcon/>
</button>

    </Panel>
  );
}

export default DownloadButton;
