import { Motion } from '@motionone/solid';
import './TabNav.css';
import { spring } from 'motion';

export function TabNav() {
   return (
      <p class="instructions">
         <Motion.code hover={{
         scale: 1.15,
         transition: {
            easing: spring()
         }
         }}><a href='/xp'>/xp</a></Motion.code>
         <Motion.code hover={{
         scale: 1.15,
         transition: {
            easing: spring()
         }
         }}><a href='/projs'>/projs</a></Motion.code>
         <Motion.code hover={{
         scale: 1.15,
         transition: {
            easing: spring()
         }
         }}><a href='/test'>/test</a></Motion.code>
      </p>
   );
 }