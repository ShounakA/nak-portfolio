import { Motion } from '@motionone/solid';
import { spring } from 'motion';
import './nak.css';
import { Show, createSignal } from 'solid-js';

export function Nak() {
   const [hovering, setHovering] = createSignal(false);

   return (
      <Motion.h1 hover={{ scale: 1.2 }} transition={{ delay: 0.05, easing: spring({ damping: 6 }) }} onMouseEnter={() => setHovering(() => true)} onMouseLeave={() => setHovering(() => false)}>
         <a href="/">
            <Show when={hovering()}>
               <span class="text">Shou</span>
            </Show>
            <span class="text-gradient">nak</span>
         </a>
      </Motion.h1>
   );
 }

 export function BlogTitle() {
   return (
      <div class="text-gradient">
         <h1>Inject THIS</h1>
      </div>
   );
 }