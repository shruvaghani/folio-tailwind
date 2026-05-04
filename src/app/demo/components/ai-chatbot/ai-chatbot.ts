import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Companies } from "./components/companies/companies";
import { Productivity } from "./components/productivity/productivity";
import { Effort } from "./components/effort/effort";
import { Insights } from "./components/insights/insights";
import { Workflow } from "./components/workflow/workflow";
import { Experience } from "./components/experience/experience";
import { Pricing } from "./components/pricing/pricing";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'app-ai-chatbot',
  imports: [Hero, Companies, Productivity, Effort, Insights, Workflow, Experience, Pricing, Footer4],
  templateUrl: './ai-chatbot.html',
  styles: ``,
})
  
export class AiChatbot {

}
