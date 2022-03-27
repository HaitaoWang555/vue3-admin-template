import { MagicStick, HelpFilled } from '@element-plus/icons-vue'

const ElIcons = { MagicStick, HelpFilled }

export default (app) => {
  for (let iconName in ElIcons) {
    app.component(iconName, ElIcons[iconName])
  }
}
