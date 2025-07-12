// src/components/TechnologiesSection.tsx
import { Badge } from '@/components/ui/badge'

const badgeColor = (groupTitle: string) => {
    switch (groupTitle) {
      case 'Languages':
        return 'bg-indigo-100 text-indigo-800'
      case 'Tools':
        return 'bg-green-100 text-green-800'
      case 'Libraries':
        return 'bg-yellow-100 text-yellow-800'
      case 'Concepts':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  

// src/components/TechnologiesSection.tsx
type TechGroup = {
    title: string
    items: string[]
  }
  
  const techGroups: TechGroup[] = [
    {
      title: 'Languages',
      items: ['C', 'C++', 'Python']
    },
    {
      title: 'Tools',
      items: [
        'Visual Studio Code',
        'Docker',
        'Linux',
        'Nvidia-Docker',
        'MLFlow',
        'AWS',
        'Databricks',
        'SQL',
        'Blender'
      ]
    },
    {
      title: 'Libraries',
      items: ['OpenCV', 'FilterPy', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Deep Learning Frameworks',
      items: [
        'Caffe',
        'PyTorch',
        'TensorFlow',
        'Keras',
        'DeepStream',
        'DLStreamer',
        'Huggingface',
        'RAG',
        'LLaVa',
        'Google OWL-ViT'
      ]
    },
    {
      title: 'Concepts',
      items: [
        'Object Detection',
        'Object Tracking',
        'Person Re-Identification',
        'CLIP',
        'VQA',
        'Transformers',
        'Threat Detection',
        'Anomaly Recognition',
        'Semi-supervised Learning',
        'Speaker Diarization',
        'Viewpoint Estimation',
        'Digital Twin Applications'
      ]
    },
    {
      title: 'Hardware',
      items: [
        'NVIDIA Jetson TX2',
        'Intel NCS2',
        'Intel RealSense',
        'NVIDIA TensorRT',
        'Linux Servers'
      ]
    }
  ]
  

export const TechnologiesSection = () => (
  <section className="mb-12">
    <h2 className="text-xl font-bold mb-4">Technologies</h2>
    <div className="space-y-6">
      {techGroups.map((group, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-gray-900 mb-2">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map(item => (
                <Badge
  key={item}
  className={`${badgeColor(group.title)} border border-gray-300 shadow-sm`}
>
  {item}
</Badge>


            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)
