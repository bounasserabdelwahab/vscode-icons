import { ILangResource } from '../../models/i18n';
import { constants } from '../../constants';

export const langEs: ILangResource = {
  newVersion: `Bienvenido a la nueva versión de ${constants.extensionName}`,
  seeReleaseNotes: 'Información sobre los últimos cambios (en inglés)',
  dontShowThis: 'No mostrar la próxima vez',
  seeReadme: 'Sobre esta extensión (en inglés)',
  welcome: `Gracias por instalar ${constants.extensionName}`,
  activate: 'Activar',
  aboutOfficialApi: 'Aprenda más sobre los iconos de archivos y carpetas (en inglés)',
  learnMore: '¿Quiere saber más?',
  reload: 'Reiniciar',
  autoReload: 'Auto Reiniciar',
  disableDetect: 'Deshabilitar Detección',
  iconCustomization: 'El manifiesto de iconos procederá a regenerarse.',
  iconRestore: 'El manifiesto de iconos procederá a restaurarse.',
  ngPresetEnabled: 'Los iconos de Angular procederán a activarse.',
  ngPresetDisabled: 'Los iconos de Angular procederán a desactivarse.',
  jsOfficialPresetEnabled: 'El icono oficial de JS procederá a activarse.',
  jsOfficialPresetDisabled: 'El icono oficial de JS procederá a desactivarse.',
  tsOfficialPresetEnabled: 'El icono oficial de TS procederá a activarse.',
  tsOfficialPresetDisabled: 'El icono oficial de TS procederá a desactivarse.',
  jsonOfficialPresetEnabled: 'El icono oficial de JSON procederá a activarse.',
  jsonOfficialPresetDisabled: 'El icono oficial de JSON procederá a desactivarse.',
  hideFoldersPresetEnabled: 'La visibilidad de los iconos de carpeta procederá a activarse.',
  hideFoldersPresetDisabled: 'La visibilidad de los iconos de carpeta procederá a desactivarse.',
  foldersAllDefaultIconPresetEnabled: 'Los iconos de carpeta específicos procederán a activarse.',
  foldersAllDefaultIconPresetDisabled: 'Los iconos de carpeta específicos procederán a desactivarse.',
  restart: 'Pulsar \'Reiniciar\' para que los cambios surtan efecto.',
  ngDetected: `${constants.extensionName} ha detectado un proyecto Angular. ` +
  'Pulsar \'Reiniciar\' para activar los iconos de Angular.',
  nonNgDetected: `${constants.extensionName} ha detectado un proyecto no Angular. ` +
  'Pulsar \'Reiniciar\' para desactivar los iconos de Angular.',
  projectDetectionReset: 'La detección de proyectos se va a restaurar a sus valores iniciales.',
};
