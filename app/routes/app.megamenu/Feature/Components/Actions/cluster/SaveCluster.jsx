import {
  Save,
  Preview,
} from '../../__index.js'


export function SaveCluster () {
  return (
    <div className="MegaMenu-SaveCluster">
      <div className="MegaMenu-SaveCluster-Save flex flex-center">
        <Save />
      </div>
      <div className="MegaMenu-SaveCluster-Preview flex flex-center">
        <Preview />
      </div>
    </div>
  )
}