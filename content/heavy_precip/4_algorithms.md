---
image: heavy_precip/algorithms.png
headline: Tracking algorithms
---

## Tracking algorithms

Transform the problem from the Eulerian into the Lagrangian frame of reference and provide valuable information about the heavy precipitation events themselves. The schematic shows the Intensity in precipitation on the y-axis and the scale of events on the x-axis. In this way we identify here convective phenomena sorted by their typical scales and intensity.

Trackers in principle work the following: first a threshold is imposed to precipition rate (prTH), second grid cells are clustered in space and time to form objects, and third all objects that are smaller than a minimal volume (minvol) are dismissed.

We here apply a well-established tracker (MET MODE-TD, see https://dtcenter.org/met-online-tutorial-metv8-0/mode-time-domain) on a composite of high-resolution observations and two cpRCMs. With this we both demonstrate the capability of convection-permitting resolutions and the usefulness of the tracker.
