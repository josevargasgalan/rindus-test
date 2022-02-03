import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

interface SpinnerConfig {
  color: ThemePalette,
  mode: ProgressSpinnerMode,
  value: number
}

export const SpinnerConfig: SpinnerConfig = {
  color:'accent',
  mode:'indeterminate',
  value: 50
}
