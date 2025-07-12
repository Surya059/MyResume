import { ExperienceItem } from './ExperienceItem'
import { Separator } from '@/components/ui/separator'




export const ExperienceSection = () => (
  <section className="mb-12">
    <h2 className="text-xl font-bold mb-4">Experience</h2>

    <ExperienceItem
      title="Lead AI/ML Engineer, Verisk"
      period="Dec 2023 – Present"
      highlights={[
        "Led an 8-member team to build a standardized RAG system for multimodal data curation.",
        "Designed modular retrieval pipelines with embeddings from BGE, CLIP, and Whisper.",
        "Integrated model endpoints (LLaMa, LLaVA, OWL-ViT) into an orchestration layer for annotation workflows.",
        "Reduced annotation time by 40% and improved label quality by 17%.",
        "Deployed globally in MLOps for teams in insurance, finance, and geospatial domains."
      ]}
    />
    <Separator className="my-4" />

    <ExperienceItem
      title="AI/ML Engineer, Verisk"
      period="July 2021 – June 2023"
      highlights={[
        "Enhanced semantic understanding in claim datasets using Donut and CLIP.",
        "Built a fraud detection tool that reduced annotation time to 12 days for 15,000 data points.",
        "Created active learning strategies with CLIP and YOLOv3 to reduce labeling costs by 75%.",
        "Prototyped early multimodal retrieval workflows for future RAG systems."
      ]}
    />
    <Separator className="my-4" />

    <ExperienceItem
      title="Research Engineer, Siemens"
      period="Jul 2018 – Apr 2021"
      highlights={[
        "Developed a multi-object tracking library with state-of-the-art PR-MOTA on UA-DETRAC.",
        "Created 3D person tracking app with 5 cm accuracy using MobileNet-SSD.",
        "Improved traffic flow in Hanoi using DeepStream deployment over 3 months."
      ]}
    />
    <Separator className="my-4" />

    <ExperienceItem
      title="Research Intern, Siemens"
      period="Jan 2018 – Jul 2018"
      highlights={[
        "Built CAD overlay pipeline for F1 race videos using Mask-RCNN + viewpoint estimation.",
        "Optimized SSD/YOLO for edge devices with TensorRT.",
        "Developed an ROS flight control pipeline for Alpha-Pilot Challenge."
      ]}
    />
  </section>
)
