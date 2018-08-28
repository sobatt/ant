import React from 'react';
import styles from '../index.less';

export default ({src,desc,style}) =>(
	<div style="{style}" classname="{styles.imageWapper}">
		<img classname={styles.img} src="{src}">
		{desc &amp;&amp; <div classname="{styles.desc}">{desc}</div>}
 	 </div>
	);
