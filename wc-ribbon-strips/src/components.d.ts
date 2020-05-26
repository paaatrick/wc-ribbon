/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RibbonGroup,
  RibbonModel,
  RibbonSubject,
} from './globals/models';

export namespace Components {
  interface WcRibbonCell {
    'annotationLabels': string[];
    /**
    * If set to true, won't show any color and can not be hovered or selected This is used for group that can not have annotation for a given subject
    */
    'available': boolean;
    'binaryColor': boolean;
    'classLabels': string[];
    'colorBy': any;
    'group': RibbonGroup;
    'hovered': boolean;
    'maxColor': number[];
    'maxHeatLevel': number;
    'minColor': number[];
    'selected': boolean;
    'subject': RibbonSubject;
  }
  interface WcRibbonStrips {
    /**
    * add a cell at the beginning of each row/subject to show all annotations
    */
    'addCellAll': boolean;
    'annotationLabels': string[];
    'baseApiUrl': string;
    /**
    * false = show a gradient of colors to indicate the value of a cell true = show only two colors (minColor; maxColor) to indicate the values of a cell
    */
    'binaryColor': boolean;
    /**
    * 0 = Normal 1 = Bold
    */
    'categoryAllStyle': any;
    /**
    * Override of the category case 0 (default) = unchanged 1 = to lower case 2 = to upper case
    */
    'categoryCase': any;
    /**
    * 0 = Normal 1 = Bold
    */
    'categoryOtherStyle': any;
    'classLabels': string[];
    /**
    * Which value to base the cell color on 0 = class count 1 = annotation count
    */
    'colorBy': any;
    /**
    * if provided, will override any value provided in subjects and subset
    */
    'data': string;
    'groupBaseUrl': string;
    'groupClickable': boolean;
    'groupMaxLabelSize': number;
    'groupNewTab': boolean;
    'maxColor': number[];
    'maxHeatLevel': number;
    'minColor': number[];
    'ribbonSummary': RibbonModel;
    /**
    * Click handling of a cell.  0 = select only the cell (1 subject, 1 group) 1 = select the whole column (all subjects, 1 group)
    */
    'selectionMode': any;
    'showOtherCategory': boolean;
    'subjectBaseUrl': string;
    'subjectOpenNewTab': boolean;
    /**
    * Position the subject label of each row 0 = None 1 = Left 2 = Right 3 = Bottom
    */
    'subjectPosition': any;
    'subjectUseTaxonIcon': boolean;
    /**
    * provide gene ids (e.g. RGD:620474,RGD:3889 or as a list ["RGD:620474", "RGD:3889"])
    */
    'subjects': string;
    'subset': string;
  }
  interface WcRibbonSubject {
    'newTab': boolean;
    'subject': {
      id: string,
      label: string,
      taxon_id: string,
      taxon_label: string,
      nb_classes: number,
      nb_annotations: number,
      groups: [{}]
    };
    'subjectBaseURL': string;
  }
}

declare global {


  interface HTMLWcRibbonCellElement extends Components.WcRibbonCell, HTMLStencilElement {}
  var HTMLWcRibbonCellElement: {
    prototype: HTMLWcRibbonCellElement;
    new (): HTMLWcRibbonCellElement;
  };

  interface HTMLWcRibbonStripsElement extends Components.WcRibbonStrips, HTMLStencilElement {}
  var HTMLWcRibbonStripsElement: {
    prototype: HTMLWcRibbonStripsElement;
    new (): HTMLWcRibbonStripsElement;
  };

  interface HTMLWcRibbonSubjectElement extends Components.WcRibbonSubject, HTMLStencilElement {}
  var HTMLWcRibbonSubjectElement: {
    prototype: HTMLWcRibbonSubjectElement;
    new (): HTMLWcRibbonSubjectElement;
  };
  interface HTMLElementTagNameMap {
    'wc-ribbon-cell': HTMLWcRibbonCellElement;
    'wc-ribbon-strips': HTMLWcRibbonStripsElement;
    'wc-ribbon-subject': HTMLWcRibbonSubjectElement;
  }
}

declare namespace LocalJSX {
  interface WcRibbonCell {
    'annotationLabels'?: string[];
    /**
    * If set to true, won't show any color and can not be hovered or selected This is used for group that can not have annotation for a given subject
    */
    'available'?: boolean;
    'binaryColor'?: boolean;
    'classLabels'?: string[];
    'colorBy'?: any;
    'group'?: RibbonGroup;
    'hovered'?: boolean;
    'maxColor'?: number[];
    'maxHeatLevel'?: number;
    'minColor'?: number[];
    'selected'?: boolean;
    'subject'?: RibbonSubject;
  }
  interface WcRibbonStrips {
    /**
    * add a cell at the beginning of each row/subject to show all annotations
    */
    'addCellAll'?: boolean;
    'annotationLabels'?: string[];
    'baseApiUrl'?: string;
    /**
    * false = show a gradient of colors to indicate the value of a cell true = show only two colors (minColor; maxColor) to indicate the values of a cell
    */
    'binaryColor'?: boolean;
    /**
    * 0 = Normal 1 = Bold
    */
    'categoryAllStyle'?: any;
    /**
    * Override of the category case 0 (default) = unchanged 1 = to lower case 2 = to upper case
    */
    'categoryCase'?: any;
    /**
    * 0 = Normal 1 = Bold
    */
    'categoryOtherStyle'?: any;
    'classLabels'?: string[];
    /**
    * Which value to base the cell color on 0 = class count 1 = annotation count
    */
    'colorBy'?: any;
    /**
    * if provided, will override any value provided in subjects and subset
    */
    'data'?: string;
    'groupBaseUrl'?: string;
    'groupClickable'?: boolean;
    'groupMaxLabelSize'?: number;
    'groupNewTab'?: boolean;
    'maxColor'?: number[];
    'maxHeatLevel'?: number;
    'minColor'?: number[];
    /**
    * This event is triggered whenever a ribbon cell is clicked
    */
    'onCellClick'?: (event: CustomEvent<any>) => void;
    /**
    * This event is triggered whenever the mouse enters a cell area
    */
    'onCellEnter'?: (event: CustomEvent<any>) => void;
    /**
    * This event is triggered whenever the mouse leaves a cell area
    */
    'onCellLeave'?: (event: CustomEvent<any>) => void;
    /**
    * This event is triggered whenever a group cell is clicked
    */
    'onGroupClick'?: (event: CustomEvent<any>) => void;
    /**
    * This event is triggered whenever the mouse enters a group cell area
    */
    'onGroupEnter'?: (event: CustomEvent<any>) => void;
    /**
    * This event is triggered whenever the mouse leaves a group cell area
    */
    'onGroupLeave'?: (event: CustomEvent<any>) => void;
    'ribbonSummary'?: RibbonModel;
    /**
    * Click handling of a cell.  0 = select only the cell (1 subject, 1 group) 1 = select the whole column (all subjects, 1 group)
    */
    'selectionMode'?: any;
    'showOtherCategory'?: boolean;
    'subjectBaseUrl'?: string;
    'subjectOpenNewTab'?: boolean;
    /**
    * Position the subject label of each row 0 = None 1 = Left 2 = Right 3 = Bottom
    */
    'subjectPosition'?: any;
    'subjectUseTaxonIcon'?: boolean;
    /**
    * provide gene ids (e.g. RGD:620474,RGD:3889 or as a list ["RGD:620474", "RGD:3889"])
    */
    'subjects'?: string;
    'subset'?: string;
  }
  interface WcRibbonSubject {
    'newTab'?: boolean;
    'subject'?: {
      id: string,
      label: string,
      taxon_id: string,
      taxon_label: string,
      nb_classes: number,
      nb_annotations: number,
      groups: [{}]
    };
    'subjectBaseURL'?: string;
  }

  interface IntrinsicElements {
    'wc-ribbon-cell': WcRibbonCell;
    'wc-ribbon-strips': WcRibbonStrips;
    'wc-ribbon-subject': WcRibbonSubject;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wc-ribbon-cell': LocalJSX.WcRibbonCell & JSXBase.HTMLAttributes<HTMLWcRibbonCellElement>;
      'wc-ribbon-strips': LocalJSX.WcRibbonStrips & JSXBase.HTMLAttributes<HTMLWcRibbonStripsElement>;
      'wc-ribbon-subject': LocalJSX.WcRibbonSubject & JSXBase.HTMLAttributes<HTMLWcRibbonSubjectElement>;
    }
  }
}


