FasdUAS 1.101.10   ��   ��    k             l     ����  r       	  I    �� 
 
�� .sysodlogaskr        TEXT 
 m        �   0 E n t e r   d e s i r e d   B r a n d   N a m e  ��  
�� 
dtxt  m       �      ��  
�� 
btns  J           m       �    N o   p r e f e r e n c e   ��  m       �    O k��    �� ��
�� 
dflt  m   	 
   �    O k��   	 o      ���� 0 
brandinput 
brandInput��  ��         l   $ !���� ! Z    $ " #�� $ " l    %���� % =     & ' & n     ( ) ( 1    ��
�� 
bhit ) o    ���� 0 
brandinput 
brandInput ' m     * * � + +  N o   p r e f e r e n c e��  ��   # r     , - , m     . . � / /   - o      ���� 0 brandreturned brandReturned��   $ r    $ 0 1 0 n    " 2 3 2 1     "��
�� 
ttxt 3 o     ���� 0 
brandinput 
brandInput 1 o      ���� 0 brandreturned brandReturned��  ��      4 5 4 l  % & 6���� 6 e   % & 7 7 o   % &���� 0 brandreturned brandReturned��  ��   5  8 9 8 l     ��������  ��  ��   9  : ; : l  ' K <���� < r   ' K = > = I  ' G�� ? @
�� .sysodlogaskr        TEXT ? m   ' * A A � B B 2 D r a g   I m a g e   i n t o   b o x   b e l o w @ �� C D
�� 
dtxt C m   + . E E � F F   D �� G H
�� 
btns G J   / 7 I I  J K J m   / 2 L L � M M  C a n c e l K  N�� N m   2 5 O O � P P  O k��   H �� Q R
�� 
dflt Q m   8 ; S S � T T  O k R �� U��
�� 
cbtn U m   > A V V � W W  C a n c e l��   > o      ���� 0 	imagepath 	imagePath��  ��   ;  X Y X l     ��������  ��  ��   Y  Z [ Z l     ��������  ��  ��   [  \ ] \ l  L [ ^���� ^ r   L [ _ ` _ J   L W a a  b c b m   L O d d � e e 
 f a n c y c  f g f m   O R h h � i i  f r i e n d l y g  j�� j m   R U k k � l l 
 k i d l y��   ` o      ���� 0 textstylelist textStyleList��  ��   ]  m n m l  \ u o���� o r   \ u p q p I  \ q�� r s
�� .gtqpchltns    @   @ ns   r o   \ _���� 0 textstylelist textStyleList s �� t u
�� 
prmp t m   b e v v � w w " S e l e c t   f o n t   s t y l e u �� x��
�� 
cnbt x m   h k y y � z z  N o   p r e f e r e n c e��   q o      ���� "0 chosentextstyle chosenTextStyle��  ��   n  { | { l     ��������  ��  ��   |  } ~ } l     ��  ���    e _set varTest to do javascript "/Users/michaelkronovet/Desktop/Automated-Logo-Generator/Azure.js"    � � � � � s e t   v a r T e s t   t o   d o   j a v a s c r i p t   " / U s e r s / m i c h a e l k r o n o v e t / D e s k t o p / A u t o m a t e d - L o g o - G e n e r a t o r / A z u r e . j s " ~  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � * $tell application "Adobe Illustrator"    � � � � H t e l l   a p p l i c a t i o n   " A d o b e   I l l u s t r a t o r " �  � � � l     �� � ���   � - ' 'do javascript' runs any arbitrary JS.    � � � � N   ' d o   j a v a s c r i p t '   r u n s   a n y   a r b i t r a r y   J S . �  � � � l     �� � ���   � 6 0 We're using the #include feature to run another    � � � � `   W e ' r e   u s i n g   t h e   # i n c l u d e   f e a t u r e   t o   r u n   a n o t h e r �  � � � l     �� � ���   � / ) file. (That's an Adobe extension to JS.)    � � � � R   f i l e .   ( T h a t ' s   a n   A d o b e   e x t e n s i o n   t o   J S . ) �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � : 4 You have to pass a full, absolute path to #include.    � � � � h   Y o u   h a v e   t o   p a s s   a   f u l l ,   a b s o l u t e   p a t h   t o   # i n c l u d e . �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � 5 / The documentation alleges that 'do javascript'    � � � � ^   T h e   d o c u m e n t a t i o n   a l l e g e s   t h a t   ' d o   j a v a s c r i p t ' �  � � � l     �� � ���   � 4 . can be passed an AppleScript file object, but    � � � � \   c a n   b e   p a s s e d   a n   A p p l e S c r i p t   f i l e   o b j e c t ,   b u t �  � � � l     �� � ���   � ) # I wasn't able to get that to work.    � � � � F   I   w a s n ' t   a b l e   t o   g e t   t h a t   t o   w o r k . �  � � � l     �� � ���   � j d do javascript "#include /Users/Tanishq/Documents/ALG/Automated-Logo-Generator/Illustratorscript.js"    � � � � �   d o   j a v a s c r i p t   " # i n c l u d e   / U s e r s / T a n i s h q / D o c u m e n t s / A L G / A u t o m a t e d - L o g o - G e n e r a t o r / I l l u s t r a t o r s c r i p t . j s " �  � � � l     �� � ���   �  end tell    � � � �  e n d   t e l l �  � � � l     ��������  ��  ��   �  � � � l  v � ����� � I  v ��� � �
�� .sysodlogaskr        TEXT � m   v y � � � � � H C h e c k   y o u r   _ _ _   f o l d e r   f o r   t h e   f i l e s ! � �� � �
�� 
btns � J   z  � �  ��� � m   z } � � � � �  O k��   � �� ���
�� 
dflt � m   � � � � � � �  O k��  ��  ��   �  � � � l  � � ����� � r   � � � � � I  � ��� � �
�� .sysodlogaskr        TEXT � m   � � � � � � � Z I f   y o u   l i k e d   a n   i m a g e ,   d r a g   i t   i n t o   b o x   b e l o w � �� � �
�� 
dtxt � m   � � � � � � �   � �� � �
�� 
btns � J   � � � �  � � � m   � � � � � � � ( D i d n ' t   l i k e   a n   i m a g e �  ��� � m   � � � � � � �  O k��   � �� ���
�� 
dflt � m   � � � � � � �  O k��   � o      ���� (0 likedimagelocation likedImageLocation��  ��   �  � � � l  � � ����� � O   � � � � � s   � � � � � 4   � ��� �
�� 
file � o   � ����� (0 likedimagelocation likedImageLocation � 4   � ��� �
�� 
cfol � o   � ����� 0 savedimages SavedImages � m   � � � ��                                                                                  MACS  alis    @  Macintosh HD                   BD ����
Finder.app                                                     ����            ����  
 cu             CoreServices  )/:System:Library:CoreServices:Finder.app/    
 F i n d e r . a p p    M a c i n t o s h   H D  &System/Library/CoreServices/Finder.app  / ��  ��  ��   �  � � � l  � ����� � Z   � � ��� � � l  � � ����� � =   � � � � � n   � � � � � 1   � ���
�� 
bhit � o   � ����� (0 likedimagelocation likedImageLocation � m   � � � � � � � ( D i d n ' t   l i k e   a n   i m a g e��  ��   � r   � � �  � m   � ���
�� boovfals  o      ���� 0 
likedimage 
likedImage��   � k   �  r   � � n   � � 1   � ���
�� 
ttxt o   � ����� (0 likedimagelocation likedImageLocation o      ���� 0 
likedimage 
likedImage 	 r   � �

 J   � �  m   � � �  s h a p e   t y p e  m   � � �  o r i e n t a t i o n  m   � � �  c o l o r s  m   � � � 
 s t y l e �� m   � � �  n a m e��   o      ����  0 likedpartslist likedPartsList	  ��  r   �!"! I  ���#$
�� .gtqpchltns    @   @ ns  # o   � �����  0 likedpartslist likedPartsList$ ��%&
�� 
prmp% m   � �'' �(( * S e l e c t   w h a t   y o u   l i k e d& ��)*
�� 
cnbt) m  ++ �,,  N o t h i n g* ��-��
�� 
mlsl- m  	��
�� boovtrue��  " o      �� 0 
likedparts 
likedParts��  ��  ��   � .�~. l     �}�|�{�}  �|  �{  �~       �z/0�z  / �y
�y .aevtoappnull  �   � ****0 �x1�w�v23�u
�x .aevtoappnull  �   � ****1 k    44  55  66  477  :88  \99  m::  �;;  �<<  �==  ��t�t  �w  �v  2  3 > �s �r  �q �p�o�n�m * .�l�k A E L O S�j V�i�h d h k�g�f v�e y�d�c�b � � � � � � � ��a ��`�_�^ ��]�\�['+�Z�Y
�s 
dtxt
�r 
btns
�q 
dflt�p 
�o .sysodlogaskr        TEXT�n 0 
brandinput 
brandInput
�m 
bhit�l 0 brandreturned brandReturned
�k 
ttxt
�j 
cbtn�i �h 0 	imagepath 	imagePath�g 0 textstylelist textStyleList
�f 
prmp
�e 
cnbt�d 
�c .gtqpchltns    @   @ ns  �b "0 chosentextstyle chosenTextStyle�a (0 likedimagelocation likedImageLocation
�` 
file
�_ 
cfol�^ 0 savedimages SavedImages�] 0 
likedimage 
likedImage�\ �[  0 likedpartslist likedPartsList
�Z 
mlsl�Y 0 
likedparts 
likedParts�u������lv��� 	E�O��,�  �E�Y ��,E�O�Oa �a �a a lv�a a a a  	E` Oa a a mvE` O_ a a a a  a ! "E` #Oa $�a %kv�a &a ! 	Oa '�a (�a )a *lv�a +� 	E` ,Oa - *a ._ ,/*a /_ 0/GUO_ ,�,a 1  
fE` 2Y ?_ ,�,E` 2Oa 3a 4a 5a 6a 7a 8vE` 9O_ 9a a :a a ;a <e� "E` =ascr  ��ޭ