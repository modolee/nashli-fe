import React from 'react';

export default ({ url, img }: { url: string; img: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <a href={url} target="_blank">
        <img src={img} style={{ width: '100%', maxWidth: '960px' }} />
      </a>
    </div>
  );
};
