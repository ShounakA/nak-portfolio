import { Component, Show, createSignal, onMount } from 'solid-js';
import { Motion } from '@motionone/solid';
import { spring } from 'motion';
import './Card.css';


function getLang() {
   if (navigator.languages !== undefined) {
      console.log(navigator.languages[0])
      return navigator.languages[0]; 
   }
   return navigator.language;
 }

export const Card: Component<{
	title: string,
	body: string,
	href: string,
   class?: string,
}> = (props)  => {
   return (
   <Motion.li 
      initial={{
         opacity: 0,
         y: -20,
      }}
      animate={{
         opacity: 100,
         y: 0,
      }}
      hover={{
         rotate: 2,
         transition: {
            easing: spring({
               damping: 0.25
            })
         }
      }}
      transition={{
         delay: 0.05,
         easing: spring({
            damping: 5
         })
      }} 
      class={`link-card ${props.class}`}
   >
      <a href={props.href} target="_blank">
         <h2>
            {props.title}
            <span>&rarr;</span>
         </h2>
         <p>
            {props.body}
         </p>
      </a>
   </Motion.li>
   );
 }
 export const XpCard: Component<{
	title: string,
	company: string,
   startDate: Date,
   endDate?: Date,
	href: string;
}> = (props)  => {

   const [lang, setLang] = createSignal('default');
   onMount(() =>{
      setLang((_v) => getLang());
   });

   return (
   <Motion.li 
      initial={{
         opacity: 0,
         y: -20,
      }}
      animate={{
         opacity: 100,
         y: 0,
      }}
      hover={{
         rotate: 2,
         transition: {
            easing: spring({
               damping: 0.25
            })
         }
      }}
      transition={{
         delay: 0.05,
         easing: spring({
            damping: 5
         })
      }} 
      class="link-card no-point"
   >
      <a href={props.href} target="_blank">
         <h2>
            {props.title}
            <span>&nbsp;&#x21AF;</span>
         </h2>
         <p class="company">
            {props.company}
         </p>
         <span>
            {props.startDate.toLocaleString(lang(), { month: 'short', year:'numeric' })} 
         </span>
         &nbsp;-&nbsp;
         <Show when={props.endDate} fallback={<span>Current</span>}>
            <span>
               {props.endDate.toLocaleString(lang(), { month: 'short', year:'numeric' })}
            </span>
         </Show>
      </a>
   </Motion.li>
   );
 }

 export const DetailCard: Component<{
	title: string,
	body: string,
}> = (props)  => {
   return (
   <Motion.li 
      initial={{
         opacity: 0,
         y: -20,
      }}
      animate={{
         opacity: 100,
         y: 0,
      }}
      hover={{
         rotate: 2,
         transition: {
            easing: spring({
               damping: 0.25
            })
         }
      }}
      transition={{
         delay: 0.05,
         easing: spring({
            damping: 5
         })
      }} 
      class='link-card'
   >
      <div>
         <h3>
            {props.title}
         </h3>
         <p>
            {props.body}
         </p>
      </div>
   </Motion.li>
   );
 }